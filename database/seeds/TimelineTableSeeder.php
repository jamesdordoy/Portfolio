<?php

use Illuminate\Database\Seeder;

use App\Models\Timeline;

class TimelineTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Timeline::class)->create([
            'from' => '2017-11-28 13:23:45',
            'to' => '2019-08-31 13:23:45',
            'name' => "Neon Digital",
            'icon' => "code",
            'title' => "Junior Web Developer",
            'body' => "Working for a local digital agency, my position included creating new interal tools e.g. for server monitoring and completing work on non-customer facing buisness systems including CRM",
        ]);

        factory(Timeline::class)->create([
            'from' => '2014-10-01 13:51:54',
            'to' => '2017-05-01 13:51:54',
            'name' => "Southampton Solent",
            'body' => "",
            'icon' => "school",
            'title' => "BSc Software Engineering",
        ]);

        factory(Timeline::class)->create([
            'from' => '2013-04-10 13:53:12',
            'to' => '2014-09-29 13:53:12',
            'name' => "Royal Bank of Scottland",
            'body' => "While working at RBS I was originally, I began as a member of agency staff, used to answering customer calls regarding their credit card accounts being in and arrears. After six weeks ofin this doing the telephony role, I was asked to help with some spreadsheets to provided trend analysis about customer calls and complaints.
                    <br><br>I proved to have an aptitude for analytical work and I moved to an analytics team in January with a
                    permanent contract with RBS. Whilst on this team I helpedMy responsibilities included managinge small
                    projects, completinged business- critical daily tasks and aideding with group incident management.
                    <br><br>I decided to continue to develop the computing skills I developed by studying at University.",
            'icon' => "work",
            'title' => "Collections Officer",
        ]);

        factory(Timeline::class)->create([
            'from' => '2011-09-29 13:55:31',
            'to' => '2013-06-29 13:55:31',
            'name' => "Chelmsford College",
            'body' => "",
            'icon' => "school",
            'title' => "BTEC National Diploma in ICT",
        ]);

        factory(Timeline::class)->create([
            'from' => '2010-03-10 13:54:30',
            'to' => '2013-10-29 13:54:30',
            'name' => "Dominos Pizza",
            'title' => "Instore &amp; Delivery Staff",
            'icon' => "work",
            'body' => "",
        ]);
        
    }
}
