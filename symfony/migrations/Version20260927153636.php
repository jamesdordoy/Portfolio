<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260927153636 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TEMPORARY TABLE __temp__timeline_events AS SELECT id, name, title, icon, body, hidden, created_at, updated_at FROM timeline_events');
        $this->addSql('DROP TABLE timeline_events');
        $this->addSql('CREATE TABLE timeline_events (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, title VARCHAR(255) NOT NULL, icon VARCHAR(255) NOT NULL, body CLOB NOT NULL, hidden BOOLEAN NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, starts_at DATETIME NOT NULL, ends_at DATETIME NOT NULL)');
        $this->addSql('INSERT INTO timeline_events (id, name, title, icon, body, hidden, created_at, updated_at) SELECT id, name, title, icon, body, hidden, created_at, updated_at FROM __temp__timeline_events');
        $this->addSql('DROP TABLE __temp__timeline_events');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TEMPORARY TABLE __temp__timeline_events AS SELECT id, name, title, icon, body, hidden, created_at, updated_at FROM timeline_events');
        $this->addSql('DROP TABLE timeline_events');
        $this->addSql('CREATE TABLE timeline_events (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, title VARCHAR(255) NOT NULL, icon VARCHAR(255) NOT NULL, body CLOB NOT NULL, hidden BOOLEAN NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, "from" DATETIME NOT NULL, "to" DATETIME NOT NULL)');
        $this->addSql('INSERT INTO timeline_events (id, name, title, icon, body, hidden, created_at, updated_at) SELECT id, name, title, icon, body, hidden, created_at, updated_at FROM __temp__timeline_events');
        $this->addSql('DROP TABLE __temp__timeline_events');
    }
}
