<?php

declare(strict_types=1);

namespace App\Tests\Controller;

use App\Factory\ProjectFactory;
use App\Factory\TimelineEventFactory;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

final class HomeControllerTest extends WebTestCase
{
    public function testHomePageRenders(): void
    {
        $client = static::createClient();
        $client->request('GET', '/');

        self::assertResponseIsSuccessful();
        self::assertStringContainsString('James', (string) $client->getResponse()->getContent());
    }

    public function testOnlyVisibleProjectsAreListed(): void
    {
        $client = static::createClient();

        ProjectFactory::createOne(['name' => 'Public Project', 'private' => false]);
        ProjectFactory::createOne(['name' => 'Secret Project', 'private' => true]);

        $crawler = $client->request('GET', '/');

        self::assertResponseIsSuccessful();
        self::assertStringContainsString('Public Project', $crawler->filter('body')->text());
        self::assertStringNotContainsString('Secret Project', $crawler->filter('body')->text());
    }

    public function testTimelineEventsAreListed(): void
    {
        $client = static::createClient();

        TimelineEventFactory::createOne(['name' => 'A Notable Job', 'title' => 'Engineer']);

        $crawler = $client->request('GET', '/');

        self::assertResponseIsSuccessful();
        self::assertStringContainsString('A Notable Job', $crawler->filter('body')->text());
    }
}
