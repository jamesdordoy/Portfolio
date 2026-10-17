<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Entity\User;
use App\Factory\ContactFactory;
use App\Factory\GameClipFactory;
use App\Factory\GameFactory;
use App\Factory\LanguageFactory;
use App\Factory\NewsletterFactory;
use App\Factory\ProjectFactory;
use App\Factory\TimelineEventFactory;
use DateTimeImmutable;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    public function __construct(
        private readonly UserPasswordHasherInterface $passwordHasher,
    ) {
    }

    public function load(ObjectManager $manager): void
    {
        $this->loadUser($manager);
        $languages = $this->loadLanguages();
        $this->loadProjects($languages);
        $this->loadTimelineEvents();
        $this->loadGames();
        $this->loadContactsAndNewsletterSignups();
    }

    private function loadUser(ObjectManager $manager): void
    {
        $user = (new User())
            ->setName('example')
            ->setEmail('example@example.com')
            ->setEmailVerifiedAt(new DateTimeImmutable())
            ->setRoles(['ROLE_USER']);

        $user->setPassword($this->passwordHasher->hashPassword($user, 'password'));

        $manager->persist($user);
        $manager->flush();
    }

    /** @return array<string, \App\Entity\Language> */
    private function loadLanguages(): array
    {
        $names = ['PHP', 'Laravel', 'Web App', 'Vue.js', 'Bootstrap', 'Firebase', 'VueFire', 'Node.js', 'Angularjs', 'Package'];

        $languages = [];
        foreach ($names as $name) {
            $languages[$name] = LanguageFactory::createOne([
                'name' => $name,
                'description' => 'PHP',
            ]);
        }

        return $languages;
    }

    /** @param array<string, \App\Entity\Language> $languages */
    private function loadProjects(array $languages): void
    {
        ProjectFactory::createOne([
            'name' => 'Portfolio',
            'description' => 'My Website Portfolio',
            'owner' => 'Me',
            'link' => 'https://www.jamesdordoy.co.uk',
            'icon' => null,
            'complete' => false,
            'private' => true,
        ]);

        ProjectFactory::createOne([
            'name' => 'Shopping Application',
            'description' => 'VueFire SPA, Vue Cli 3, Tailwind.css.',
            'owner' => 'Me',
            'icon' => '/storage/images/projects/simple-shopping.png',
            'link' => 'https://shopping.jamesdordoy.co.uk',
            'complete' => false,
            'private' => true,
        ]);

        ProjectFactory::createOne([
            'name' => 'Laravel Vue Datatables',
            'description' => 'A Vue.js datatable component for Laravel that works with Bootstrap.',
            'owner' => 'Me',
            'icon' => '/storage/images/projects/bootstrap-datatable.png',
            'link' => 'https://github.com/jamesdordoy/laravel-vue-datatable',
            'complete' => false,
            'private' => false,
            'languages' => [$languages['PHP'], $languages['Laravel'], $languages['Vue.js'], $languages['Bootstrap'], $languages['Package']],
        ]);

        ProjectFactory::createOne([
            'name' => 'PHP Forward Chaining Engine',
            'description' => 'A simple Forward Chaining Engine written in PHP and makes use of the Symfony expressions language',
            'owner' => 'Me',
            'icon' => '/storage/images/projects/PHPBinaryTree.png',
            'link' => 'https://github.com/jamesdordoy/PHP-Forward-Chaining',
            'complete' => false,
            'private' => false,
            'languages' => [$languages['PHP'], $languages['Package']],
        ]);

        ProjectFactory::createOne([
            'name' => 'Points of Interest',
            'description' => 'A JavaScript frontend mapping app with a PHP and Node.JS backend made while attending University.',
            'owner' => 'Me',
            'icon' => '/storage/images/projects/PointsofInterest.png',
            'link' => '',
            'complete' => false,
            'private' => false,
            'languages' => [$languages['PHP'], $languages['Web App'], $languages['Bootstrap'], $languages['Node.js'], $languages['Angularjs']],
        ]);
    }

    private function loadTimelineEvents(): void
    {
        TimelineEventFactory::createOne([
            'from' => new DateTimeImmutable('2020-11-15 13:23:45'),
            'to' => new DateTimeImmutable('2023-02-15 13:23:45'),
            'name' => 'Pulse Digital',
            'icon' => 'code',
            'title' => 'Full Stack Developer',
            'body' => 'Now working from home, I joined the team at Pulse Digital as a Fullstack Developer. During this time I worked on client and internal projects including work on their SaaS platform Heartbeat.
            <br>Now in 2023, I have been working on custom platforms and started working with larger datasets and more annoying APIs.',
            'hidden' => false,
        ]);

        TimelineEventFactory::createOne([
            'from' => new DateTimeImmutable('2020-03-15 13:23:45'),
            'to' => new DateTimeImmutable('2020-09-30 13:23:45'),
            'name' => 'Ghost Enterprises',
            'icon' => 'building',
            'title' => 'Technical Support',
            'body' => 'Working for another local business, I provided technical support and managed websites and servers for Ghost Enterprises. During this time I helped with general operations, support requests and managing parts of IT and Essex Cricket.
            <br><br>During this time I learned alot about manging WordPress sites using virtual private servers, running a local virtualization server locally called Proxmox and manging users and accounts with Sharepoint.',
            'hidden' => false,
        ]);

        TimelineEventFactory::createOne([
            'from' => new DateTimeImmutable('2017-11-28 13:23:45'),
            'to' => new DateTimeImmutable('2019-08-31 13:23:45'),
            'name' => 'Neon Digital',
            'icon' => 'code',
            'title' => 'Junior Web Developer',
            'body' => 'Working for a local digital agency, my position included creating new internal tools e.g. for server monitoring and completing work on non-customer facing business systems including CRM, CMS and ordering systems.
            <br><br>The main tech stack I was using during this time was L.A.M.P. or L.E.M.P. with a Laravel backend. On the frontend, the company was trying to move away from using JQuery so I gained alot of knowledge of JQuery and Vue.js by porting different UI elements.',
            'hidden' => false,
        ]);

        TimelineEventFactory::createOne([
            'from' => new DateTimeImmutable('2014-10-01 13:51:54'),
            'to' => new DateTimeImmutable('2017-05-01 13:51:54'),
            'name' => 'Southampton Solent',
            'icon' => 'school',
            'title' => 'BSc Software Engineering',
            'body' => 'Studying at Southampton Solent University gave me a chance to spend time homing in my programming skills.
            <br><br>During this time, I became very familiar with PHP and Java. I also started dabbling with AI topics such as Forward Chaining and Neural Networks and created some basic examples.
            <br><br>I ended up creating a simple social network in PHP for my dissertation using no frameworks as an objective as the SNA was required to work on a SBC server.',
            'hidden' => false,
        ]);

        TimelineEventFactory::createOne([
            'from' => new DateTimeImmutable('2013-04-10 13:53:12'),
            'to' => new DateTimeImmutable('2014-09-29 13:53:12'),
            'name' => 'Royal Bank of Scotland',
            'icon' => 'building',
            'title' => 'Collections Officer',
            'body' => 'While working at RBS I was originally, I began as a member of agency staff, used to answering customer calls regarding their credit card accounts being in and arrears.
                    After six weeks working the telephony role, I was asked to help with some spreadsheets to provided trend analysis about customer calls and complaints.
                    <br><br>I proved to have an aptitude for analytical work and I moved to an analytics team in January with a
                    permanent contract with RBS. Whilst on this team, my responsibilities included managing small
                    projects, completing business critical daily tasks and aiding with group incident management.
                    <br><br>I decided to continue to develop the computing skills I developed by studying at University.',
            'hidden' => false,
        ]);

        TimelineEventFactory::createOne([
            'from' => new DateTimeImmutable('2011-09-29 13:55:31'),
            'to' => new DateTimeImmutable('2013-06-29 13:55:31'),
            'name' => 'Chelmsford College',
            'icon' => 'school',
            'title' => 'BTEC National Diploma ICT',
            'body' => 'Whilst studying at Chelmsford college, I was introduced to basic programming, database management and web design.
            <br><br>During this time, I picked up the basics of C++, JavaScript and working with relational databases. I was also exposed to industry level software such as the Adobe suite',
            'hidden' => false,
        ]);
    }

    private function loadGames(): void
    {
        GameFactory::createOne([
            'name' => 'Halo Infinite',
            'description' => 'Xbox flagship arena shooter',
            'icon' => '/storage/images/games/halo.svg',
            'link' => 'https://www.halowaypoint.com',
            'complete' => false,
            'private' => false,
        ]);

        GameFactory::createOne([
            'name' => 'Destiny 2',
            'description' => 'Space MMO shooter',
            'icon' => '/storage/images/games/destiny.png',
            'link' => 'https://www.bungie.net',
            'complete' => false,
            'private' => false,
        ]);

        GameFactory::createOne([
            'name' => 'Overwatch 2',
            'description' => 'PC arena shooter',
            'icon' => '/storage/images/games/overwatch.svg',
            'link' => 'https://overwatch.blizzard.com',
            'complete' => false,
            'private' => false,
        ]);

        $fortnite = GameFactory::createOne([
            'name' => 'Fortnite',
            'description' => 'PC shooter',
            'icon' => '/storage/images/games/overwatch.svg',
            'link' => 'https://www.fortnite.com/',
            'complete' => false,
            'private' => false,
        ]);

        $dbz = GameFactory::createOne([
            'name' => 'Dragon Ball Z Budakai 3',
            'description' => 'Xbox 360 arcade fighting game',
            'icon' => '/storage/images/games/overwatch.svg',
            'link' => 'https://www.fortnite.com/',
            'complete' => false,
            'private' => false,
        ]);

        GameClipFactory::createOne([
            'game' => $fortnite,
            'url' => 'https://www.youtube.com/embed/0SoyVjFvkO4',
        ]);

        GameClipFactory::createOne([
            'game' => $dbz,
            'url' => 'https://www.youtube.com/embed/YVNxSDAZLAE',
        ]);
    }

    private function loadContactsAndNewsletterSignups(): void
    {
        ContactFactory::createOne([
            'name' => 'Jane Recruiter',
            'email' => 'jane@example.com',
            'message' => "Hi James, I'd love to chat about a role on our platform team.",
        ]);

        NewsletterFactory::createOne([
            'email' => 'subscriber@example.com',
        ]);
    }
}
