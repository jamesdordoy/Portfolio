<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\Project;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Project>
 */
class ProjectRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Project::class);
    }

    /** @return list<Project> */
    public function findVisibleOrderedByNewest(): array
    {
        return $this->visibleQuery()
            ->orderBy('project.createdAt', 'DESC')
            ->getQuery()
            ->getResult();
    }

    private function visibleQuery(): QueryBuilder
    {
        return $this->createQueryBuilder('project')
            ->leftJoin('project.languages', 'language')
            ->addSelect('language')
            ->where('project.private = false');
    }
}
