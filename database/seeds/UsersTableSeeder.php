<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        \App\User::create([
            'name' => 'James Dordoy',
            'email' => 'jamesdordoy@gmail.com',
            'password' => Hash::make('G0verness'),
        ]);
    }
}
