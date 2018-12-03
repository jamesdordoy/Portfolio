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
        \App\Models\User::create([
            'name' => 'James Dordoy',
            'email' => 'jamesdordoy@gmail.com',
            'password' => Hash::make('d0rd0y'),
        ]);
    }
}
