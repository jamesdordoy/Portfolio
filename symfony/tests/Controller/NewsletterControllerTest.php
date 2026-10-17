<?php

declare(strict_types=1);

namespace App\Tests\Controller;

use App\Repository\NewsletterRepository;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

final class NewsletterControllerTest extends WebTestCase
{
    public function testValidEmailIsStored(): void
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/');

        $form = $crawler->filter('footer button[type="submit"]')->form([
            'newsletter[email]' => 'subscriber@example.com',
        ]);

        $client->submit($form);

        self::assertResponseRedirects('/#contact');

        /** @var NewsletterRepository $newsletters */
        $newsletters = static::getContainer()->get(NewsletterRepository::class);
        self::assertNotNull($newsletters->findOneBy(['email' => 'subscriber@example.com']));
    }

    public function testDuplicateEmailDoesNotCreateASecondRow(): void
    {
        $client = static::createClient();

        foreach (range(1, 2) as $attempt) {
            $crawler = $client->request('GET', '/');
            $form = $crawler->filter('footer button[type="submit"]')->form([
                'newsletter[email]' => 'repeat@example.com',
            ]);
            $client->submit($form);
        }

        /** @var NewsletterRepository $newsletters */
        $newsletters = static::getContainer()->get(NewsletterRepository::class);
        self::assertCount(1, $newsletters->findBy(['email' => 'repeat@example.com']));
    }

    public function testBlankEmailFailsValidation(): void
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/');

        $form = $crawler->filter('footer button[type="submit"]')->form([
            'newsletter[email]' => '',
        ]);

        $client->submit($form);

        self::assertResponseStatusCodeSame(422);
    }
}
