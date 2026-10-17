<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\Language;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Language>
 */
class LanguageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Language::class);
    }

    /** @return list<Language> */
    public function findAllOrdered(): array
    {
        return $this->createQueryBuilder('language')
            ->orderBy('language.id', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
