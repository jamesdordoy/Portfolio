<?php

namespace Database\Seeders;

use App\Models\TimelineEvent;
use Illuminate\Database\Seeder;

class TimelineEventTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        TimelineEvent::factory()->create(array(
            'from' => '2017-11-28 13:23:45',
            'to' => '2019-08-31 13:23:45',
            'name' => 'Neon Digital',
            'icon' => 'code',
            'title' => 'Junior Web Developer',
            'body' => 'Working for a local digital agency, my position included creating new internal tools e.g. for server monitoring and completing work on non-customer facing business systems including CRM, CMS and ordering systems.
            <br><br>The main tech stack i was using during this time was L.A.M.P. or L.E.M.P. with a Laravel backend. On the frontend, the company was trying to move away from using JQuery so i gained alot of knowledge of JQuery and Vue.js by porting different UI elements.',
        ));

        TimelineEvent::factory()->create(array(
            'from' => '2014-10-01 13:51:54',
            'to' => '2017-05-01 13:51:54',
            'name' => 'Southampton Solent',
            'icon' => 'school',
            'title' => 'BSc Software Engineering',
            'body' => 'Studying at Southampton Solent University gave me a chance to spend time homing in my programming skills.
            <br><br>During this time, I became very familiar with PHP and Java. I also started dabbling with AI topics such as Forward Chaining and Nerual Networks and created some basic examples.
            <br><br>I ended up creating a simple social network in PHP for my disattation using no frameworks as an objective as the SNA was required to work on a SBC server.',
        ));

        TimelineEvent::factory()->create(array(
            'from' => '2013-04-10 13:53:12',
            'to' => '2014-09-29 13:53:12',
            'name' => 'Royal Bank of Scottland',
            'body' => 'While working at RBS I was originally, I began as a member of agency staff, used to answering customer calls regarding their credit card accounts being in and arrears.
                    After six weeks working the telephony role, I was asked to help with some spreadsheets to provided trend analysis about customer calls and complaints.
                    <br><br>I proved to have an aptitude for analytical work and I moved to an analytics team in January with a
                    permanent contract with RBS. Whilst on this team, my responsibilities included managing small
                    projects, completing business critical daily tasks and aiding with group incident management.
                    <br><br>I decided to continue to develop the computing skills I developed by studying at University.',
            'icon' => 'building',
            'title' => 'Collections Officer',
        ));

        TimelineEvent::factory()->create(array(
            'from' => '2011-09-29 13:55:31',
            'to' => '2013-06-29 13:55:31',
            'name' => 'Chelmsford College',
            'icon' => 'school',
            'title' => 'BTEC National Diploma ICT',
            'body' => 'Whilst studying at Chelmsford college, i was introduced to basic programming, database management and web design.
            <br><br>During this time, i picked up the basics of C++, JavaScript and working with relational databases. I was also exposed to industry level software such as the Adobe suite',
        ));

        TimelineEvent::factory()->create(array(
            'from' => '2010-03-10 13:54:30',
            'to' => '2013-10-29 13:54:30',
            'name' => 'Dominos Pizza',
            'title' => 'Instore & Delivery Staff',
            'icon' => 'building',
            'body' => 'While working at Dominoes, i became used to working in a target based environment and dealing with customer expectation.
            <br><br>I originally started as instore staff but after attaining my drivers licence, i also started delivering to customers expanding my knowledge of the full process.',
        ));
    }
}
