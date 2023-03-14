<?php

use TomasVotruba\PunchCard\ViewConfig;

return ViewConfig::make()
    ->paths([
        resource_path('views'),
    ])
    ->compiled(env(
        'VIEW_COMPILED_PATH',
        realpath(storage_path('framework/views'))
    ))
    ->toArray();
