<?php

use TomasVotruba\PunchCard\CorsConfig;

return CorsConfig::make()
    ->paths(['api/*', 'sanctum/csrf-cookie'])
    ->allowedMethods(['*'])
    ->allowedOrigins(['*'])
    ->allowedOriginsPatterns([])
    ->allowedHeaders(['*'])
    ->exposedHeaders([])
    ->maxAge(0)
    ->supportsCredentials(false)
    ->toArray();
