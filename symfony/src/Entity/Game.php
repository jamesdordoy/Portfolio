<?php

declare(strict_types=1);

namespace App\Entity;

use App\Entity\Trait\TimestampableTrait;
use App\Repository\GameRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: GameRepository::class)]
#[ORM\Table(name: 'games')]
#[ORM\HasLifecycleCallbacks]
class Game
{
    use TimestampableTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private string $name = '';

    #[ORM\Column(type: Types::TEXT)]
    private string $description = '';

    #[ORM\Column(length: 255)]
    private string $link = '';

    #[ORM\Column(length: 255)]
    private string $icon = '';

    #[ORM\Column]
    private bool $complete = false;

    #[ORM\Column]
    private bool $private = false;

    /** @var Collection<int, GameClip> */
    #[ORM\OneToMany(targetEntity: GameClip::class, mappedBy: 'game', cascade: ['persist'], orphanRemoval: true)]
    private Collection $clips;

    public function __construct()
    {
        $this->clips = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getDescription(): string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getLink(): string
    {
        return $this->link;
    }

    public function setLink(string $link): static
    {
        $this->link = $link;

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

    public function isComplete(): bool
    {
        return $this->complete;
    }

    public function setComplete(bool $complete): static
    {
        $this->complete = $complete;

        return $this;
    }

    public function isPrivate(): bool
    {
        return $this->private;
    }

    public function setPrivate(bool $private): static
    {
        $this->private = $private;

        return $this;
    }

    /** @return Collection<int, GameClip> */
    public function getClips(): Collection
    {
        return $this->clips;
    }

    public function addClip(GameClip $clip): static
    {
        if (!$this->clips->contains($clip)) {
            $this->clips->add($clip);
            $clip->setGame($this);
        }

        return $this;
    }

    public function removeClip(GameClip $clip): static
    {
        $this->clips->removeElement($clip);

        return $this;
    }
}
