<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Business Logic Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the business logic for my portfolio. These are composable and can be pulled in form the DI container.
    |
    */

    'jamesdordoy' => [
        'LanguageService' => 'LanguageServiceContract',
        'ContactService'  => 'ContactServiceContract',
        'AssetService'    => 'AssetServiceContract',
    ],

];
