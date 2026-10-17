<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\Contact;
use App\Entity\Newsletter;
use App\Form\ContactType;
use App\Form\NewsletterType;
use App\Repository\ProjectRepository;
use App\Repository\TimelineEventRepository;
use App\Service\RecaptchaVerifier;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormError;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Attribute\Route;

final class ContactController extends AbstractController
{
    #[Route('/contact', name: 'contact_store', methods: ['POST'])]
    public function __invoke(
        Request $request,
        EntityManagerInterface $entityManager,
        RecaptchaVerifier $recaptcha,
        MailerInterface $mailer,
        ProjectRepository $projects,
        TimelineEventRepository $timelineEvents,
    ): Response {
        $contact = new Contact();
        $form = $this->createForm(ContactType::class, $contact, [
            'action' => $this->generateUrl('contact_store'),
        ]);
        $form->handleRequest($request);

        $recaptchaPassed = $recaptcha->verify($request->request->getString('recaptcha_token'));

        if ($form->isSubmitted() && $form->isValid() && $recaptchaPassed) {
            $entityManager->persist($contact);
            $entityManager->flush();

            $this->sendNotification($mailer, $contact);

            $this->addFlash('contact_sent', true);

            return $this->redirect($this->generateUrl('home').'#contact');
        }

        if ($form->isSubmitted() && !$recaptchaPassed) {
            $form->addError(new FormError('reCAPTCHA verification failed, please try again.'));
        }

        $newsletterForm = $this->createForm(NewsletterType::class, new Newsletter(), [
            'action' => $this->generateUrl('newsletter_store'),
        ]);

        return $this->render('home/index.html.twig', [
            'projects' => $projects->findVisibleOrderedByNewest(),
            'timeline' => $timelineEvents->findBy([], ['from' => 'ASC']),
            'contact_form' => $form->createView(),
            'newsletter_form' => $newsletterForm->createView(),
        ], new Response(status: 422));
    }

    private function sendNotification(MailerInterface $mailer, Contact $contact): void
    {
        $email = (new Email())
            ->to(new Address('example@example.com', 'James Dordoy'))
            ->replyTo(new Address($contact->getEmail(), $contact->getName()))
            ->subject(sprintf('New contact message from %s', $contact->getName()))
            ->text(sprintf(
                "Name: %s\nEmail: %s\n\n%s",
                $contact->getName(),
                $contact->getEmail(),
                $contact->getMessage(),
            ));

        $mailer->send($email);
    }
}
