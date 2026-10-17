<?php

declare(strict_types=1);

namespace App\Entity;

use App\Entity\Trait\TimestampableTrait;
use App\Repository\TimelineEventRepository;
use DateTimeImmutable;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TimelineEventRepository::class)]
#[ORM\Table(name: 'timeline_events')]
#[ORM\HasLifecycleCallbacks]
class TimelineEvent
{
    use TimestampableTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(name: 'starts_at')]
    private DateTimeImmutable $from;

    #[ORM\Column(name: 'ends_at')]
    private DateTimeImmutable $to;

    #[ORM\Column(length: 255)]
    private string $name = '';

    #[ORM\Column(length: 255)]
    private string $title = '';

    #[ORM\Column(length: 255)]
    private string $icon = '';

    #[ORM\Column(type: Types::TEXT)]
    private string $body = '';

    #[ORM\Column]
    private bool $hidden = false;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFrom(): DateTimeImmutable
    {
        return $this->from;
    }

    public function setFrom(DateTimeImmutable $from): static
    {
        $this->from = $from;

        return $this;
    }

    public function getTo(): DateTimeImmutable
    {
        return $this->to;
    }

    public function setTo(DateTimeImmutable $to): static
    {
        $this->to = $to;

        return $this;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function getIcon(): string
    {
        return $this->icon;
    }

    public function setIcon(string $icon): static
    {
        $this->icon = $icon;

        return $this;
    }

    public function getBody(): string
    {
        return $this->body;
    }

    public function setBody(string $body): static
    {
        $this->body = $body;

        return $this;
    }

    public function isHidden(): bool
    {
        return $this->hidden;
    }

    public function setHidden(bool $hidden): static
    {
        $this->hidden = $hidden;

        return $this;
    }
}
