<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\GameClip;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<GameClip>
 */
class GameClipRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GameClip::class);
    }

    /** @return list<GameClip> */
    public function findAllWithGame(): array
    {
        return $this->createQueryBuilder('clip')
            ->addSelect('game')
            ->join('clip.game', 'game')
            ->getQuery()
            ->getResult();
    }
}
