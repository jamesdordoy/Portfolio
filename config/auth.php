<?php

use TomasVotruba\PunchCard\AuthConfig;

return AuthConfig::make()
    ->defaults([
        'guard' => 'web',
        'passwords' => 'users',
    ])
    ->guards([
        'web' => [
            'driver' => 'session',
            'provider' => 'users',
        ],
    ])
    ->providers([
        'users' => [
            'driver' => 'eloquent',
            'model' => App\Models\User::class,
        ],
    ])
    ->passwords([
        'users' => [
            'provider' => 'users',
            'table' => 'password_resets',
            'expire' => 60,
            'throttle' => 60,
        ],
    ])
    ->passwordTimeout(10800)
    ->toArray();
