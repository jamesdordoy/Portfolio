<?php

declare(strict_types=1);

namespace App\Tests\Controller;

use App\Repository\ContactRepository;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

final class ContactControllerTest extends WebTestCase
{
    public function testValidSubmissionPersistsAndRedirects(): void
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/');

        $form = $crawler->filter('button:contains("Send Message")')->form([
            'contact[name]' => 'Ada Lovelace',
            'contact[email]' => 'ada@example.com',
            'contact[message]' => 'Hello from the test suite.',
        ]);

        $client->submit($form);

        self::assertResponseRedirects('/#contact');

        /** @var ContactRepository $contacts */
        $contacts = static::getContainer()->get(ContactRepository::class);
        $stored = $contacts->findOneBy(['email' => 'ada@example.com']);

        self::assertNotNull($stored);
        self::assertSame('Ada Lovelace', $stored->getName());
        self::assertSame('Hello from the test suite.', $stored->getMessage());
    }

    public function testMissingNameFailsValidation(): void
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/');

        $form = $crawler->filter('button:contains("Send Message")')->form([
            'contact[name]' => '',
            'contact[email]' => 'ada@example.com',
            'contact[message]' => 'Hello from the test suite.',
        ]);

        $client->submit($form);

        self::assertResponseStatusCodeSame(422);
        self::assertStringContainsString('should not be blank', (string) $client->getResponse()->getContent());
    }

    public function testInvalidEmailFailsValidation(): void
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/');

        $form = $crawler->filter('button:contains("Send Message")')->form([
            'contact[name]' => 'Ada Lovelace',
            'contact[email]' => 'not-an-email',
            'contact[message]' => 'Hello from the test suite.',
        ]);

        $client->submit($form);

        self::assertResponseStatusCodeSame(422);
    }
}
