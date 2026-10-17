<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\Contact;
use App\Entity\Newsletter;
use App\Form\ContactType;
use App\Form\NewsletterType;
use App\Repository\ProjectRepository;
use App\Repository\TimelineEventRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class HomeController extends AbstractController
{
    #[Route('/', name: 'home', methods: ['GET'])]
    public function index(ProjectRepository $projects, TimelineEventRepository $timelineEvents): Response
    {
        $contactForm = $this->createForm(ContactType::class, new Contact(), [
            'action' => $this->generateUrl('contact_store'),
        ]);

        $newsletterForm = $this->createForm(NewsletterType::class, new Newsletter(), [
            'action' => $this->generateUrl('newsletter_store'),
        ]);

        return $this->render('home/index.html.twig', [
            'projects' => $projects->findVisibleOrderedByNewest(),
            'timeline' => $timelineEvents->findBy([], ['from' => 'ASC']),
            'contact_form' => $contactForm->createView(),
            'newsletter_form' => $newsletterForm->createView(),
        ]);
    }
}
