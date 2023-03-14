<?php

use Illuminate\Support\Str;
use TomasVotruba\PunchCard\CacheConfig;

return CacheConfig::make()
    ->default(env('CACHE_DRIVER', 'file'))
    ->stores([
        'apc' => [
            'driver' => 'apc',
        ],
        'array' => [
            'driver' => 'array',
            'serialize' => false,
        ],
        'database' => [
            'driver' => 'database',
            'table' => 'cache',
            'connection' => null,
            'lock_connection' => null,
        ],
        'file' => [
            'driver' => 'file',
            'path' => storage_path('framework/cache/data'),
        ],
        'redis' => [
            'driver' => 'redis',
            'connection' => 'cache',
            'lock_connection' => 'default',
        ],
    ])
    ->prefix(env('CACHE_PREFIX', Str::slug(env('APP_NAME', 'laravel'), '_').'_cache'))
    ->toArray();
