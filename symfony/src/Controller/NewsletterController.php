<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\Contact;
use App\Entity\Newsletter;
use App\Form\ContactType;
use App\Form\NewsletterType;
use App\Repository\ProjectRepository;
use App\Repository\TimelineEventRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class NewsletterController extends AbstractController
{
    #[Route('/newsletter', name: 'newsletter_store', methods: ['POST'])]
    public function __invoke(
        Request $request,
        EntityManagerInterface $entityManager,
        ProjectRepository $projects,
        TimelineEventRepository $timelineEvents,
    ): Response {
        $newsletter = new Newsletter();
        $form = $this->createForm(NewsletterType::class, $newsletter, [
            'action' => $this->generateUrl('newsletter_store'),
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $existing = $entityManager->getRepository(Newsletter::class)->findOneBy(['email' => $newsletter->getEmail()]);

            if ($existing === null) {
                $entityManager->persist($newsletter);
                $entityManager->flush();
            }

            $this->addFlash('newsletter_sent', true);

            return $this->redirect($this->generateUrl('home').'#contact');
        }

        $contactForm = $this->createForm(ContactType::class, new Contact(), [
            'action' => $this->generateUrl('contact_store'),
        ]);

        return $this->render('home/index.html.twig', [
            'projects' => $projects->findVisibleOrderedByNewest(),
            'timeline' => $timelineEvents->findBy([], ['from' => 'ASC']),
            'contact_form' => $contactForm->createView(),
            'newsletter_form' => $form->createView(),
        ], new Response(status: 422));
    }
}
