<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260927153141 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE contacts (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, message CLOB NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL)');
        $this->addSql('CREATE TABLE game_clips (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, url VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, game_id INTEGER NOT NULL, CONSTRAINT FK_FA46626BE48FD905 FOREIGN KEY (game_id) REFERENCES games (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('CREATE INDEX IDX_FA46626BE48FD905 ON game_clips (game_id)');
        $this->addSql('CREATE TABLE games (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, description CLOB NOT NULL, link VARCHAR(255) NOT NULL, icon VARCHAR(255) NOT NULL, complete BOOLEAN NOT NULL, private BOOLEAN NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL)');
        $this->addSql('CREATE TABLE languages (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, description CLOB NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL)');
        $this->addSql('CREATE TABLE newsletters (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, email VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8ECF000CE7927C74 ON newsletters (email)');
        $this->addSql('CREATE TABLE projects (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, description CLOB NOT NULL, owner VARCHAR(255) NOT NULL, link VARCHAR(255) DEFAULT NULL, icon VARCHAR(255) DEFAULT NULL, complete BOOLEAN NOT NULL, private BOOLEAN NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL)');
        $this->addSql('CREATE TABLE project_language (project_id INTEGER NOT NULL, language_id INTEGER NOT NULL, PRIMARY KEY (project_id, language_id), CONSTRAINT FK_E995FA6E166D1F9C FOREIGN KEY (project_id) REFERENCES projects (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_E995FA6E82F1BAF4 FOREIGN KEY (language_id) REFERENCES languages (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('CREATE INDEX IDX_E995FA6E166D1F9C ON project_language (project_id)');
        $this->addSql('CREATE INDEX IDX_E995FA6E82F1BAF4 ON project_language (language_id)');
        $this->addSql('CREATE TABLE timeline_events (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, "from" DATETIME NOT NULL, "to" DATETIME NOT NULL, name VARCHAR(255) NOT NULL, title VARCHAR(255) NOT NULL, icon VARCHAR(255) NOT NULL, body CLOB NOT NULL, hidden BOOLEAN NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL)');
        $this->addSql('CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, email_verified_at DATETIME DEFAULT NULL, password VARCHAR(255) NOT NULL, roles CLOB NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_1483A5E9E7927C74 ON users (email)');
        $this->addSql('CREATE TABLE messenger_messages (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, body CLOB NOT NULL, headers CLOB NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL, available_at DATETIME NOT NULL, delivered_at DATETIME DEFAULT NULL)');
        $this->addSql('CREATE INDEX IDX_75EA56E0FB7336F0E3BD61CE16BA31DBBF396750 ON messenger_messages (queue_name, available_at, delivered_at, id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE contacts');
        $this->addSql('DROP TABLE game_clips');
        $this->addSql('DROP TABLE games');
        $this->addSql('DROP TABLE languages');
        $this->addSql('DROP TABLE newsletters');
        $this->addSql('DROP TABLE projects');
        $this->addSql('DROP TABLE project_language');
        $this->addSql('DROP TABLE timeline_events');
        $this->addSql('DROP TABLE users');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
