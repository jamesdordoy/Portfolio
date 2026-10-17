<?php

namespace App\Factory;

use App\Entity\TimelineEvent;
use Zenstruck\Foundry\Persistence\PersistentObjectFactory;

/**
 * @extends PersistentObjectFactory<TimelineEvent>
 */
final class TimelineEventFactory extends PersistentObjectFactory
{
    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#factories-as-services
     *
     * @todo inject services if required
     */
    public function __construct()
    {
    }

    #[\Override]
    public static function class(): string
    {
        return TimelineEvent::class;
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#model-factories
     *
     * @todo add your default values here
     */
    #[\Override]
    protected function defaults(): array|callable
    {
        return [
            'body' => self::faker()->text(),
            'from' => \DateTimeImmutable::createFromMutable(self::faker()->dateTime()),
            'hidden' => self::faker()->boolean(),
            'icon' => self::faker()->text(255),
            'name' => self::faker()->text(255),
            'title' => self::faker()->text(255),
            'to' => \DateTimeImmutable::createFromMutable(self::faker()->dateTime()),
        ];
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
     */
    #[\Override]
    protected function initialize(): static
    {
        return $this
            // ->afterInstantiate(function(TimelineEvent $timelineEvent): void {})
        ;
    }
}
