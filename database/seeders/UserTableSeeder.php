<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder
{
    public function run(): void
    {
        User::factory()->create([
            'name' => 'example',
            'email' => 'example@example.com',
            'password' => Hash::make('password'),
        ]);
    }
}
