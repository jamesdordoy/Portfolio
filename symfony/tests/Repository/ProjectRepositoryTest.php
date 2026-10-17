<?php

declare(strict_types=1);

namespace App\Tests\Repository;

use App\Factory\LanguageFactory;
use App\Factory\ProjectFactory;
use App\Repository\ProjectRepository;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

final class ProjectRepositoryTest extends KernelTestCase
{
    public function testOnlyNonPrivateProjectsAreReturned(): void
    {
        ProjectFactory::createOne(['name' => 'Visible One', 'private' => false]);
        ProjectFactory::createOne(['name' => 'Hidden One', 'private' => true]);

        $names = array_map(
            static fn ($project) => $project->getName(),
            $this->repository()->findVisibleOrderedByNewest(),
        );

        self::assertContains('Visible One', $names);
        self::assertNotContains('Hidden One', $names);
    }

    public function testResultsAreOrderedNewestFirst(): void
    {
        $older = ProjectFactory::createOne(['name' => 'Older', 'private' => false]);
        sleep(1);
        $newer = ProjectFactory::createOne(['name' => 'Newer', 'private' => false]);

        $results = $this->repository()->findVisibleOrderedByNewest();

        self::assertSame($newer->getId(), $results[0]->getId());
        self::assertSame($older->getId(), $results[array_key_last($results)]->getId());
    }

    public function testLanguagesAreEagerLoaded(): void
    {
        $php = LanguageFactory::createOne(['name' => 'PHP']);
        ProjectFactory::createOne(['name' => 'Tagged Project', 'private' => false, 'languages' => [$php]]);

        $project = $this->repository()->findVisibleOrderedByNewest()[0];

        self::assertCount(1, $project->getLanguages());
        self::assertSame('PHP', $project->getLanguages()->first()->getName());
    }

    private function repository(): ProjectRepository
    {
        self::bootKernel();

        /** @var ProjectRepository $repository */
        $repository = static::getContainer()->get(ProjectRepository::class);

        return $repository;
    }
}
