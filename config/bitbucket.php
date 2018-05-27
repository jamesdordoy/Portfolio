<?php

declare(strict_types=1);

/*
 * This file is part of Laravel Bitbucket.
 *
 * (c) Graham Campbell <graham@alt-three.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

return [

    /*
    |--------------------------------------------------------------------------
    | Default Connection Name
    |--------------------------------------------------------------------------
    |
    | Here you may specify which of the connections below you wish to use as
    | your default connection for all work. Of course, you may use many
    | connections at once using the manager class.
    |
    */

    'default' => 'main',

    /*
    |--------------------------------------------------------------------------
    | Bitbucket Connections
    |--------------------------------------------------------------------------
    |
    | Here are each of the connections setup for your application. Example
    | configuration has been included, but you may add as many connections as
    | you would like. Note that the two supported authentication methods are:
    | "basic", "token", "oath", and "oath2".
    |
    */

    'connections' => [

        'main' => [
            'token'   => 'your-token',
            'method'  => 'token',
            // 'logging' => false,
            // 'baseUrl' => 'https://api.bitbucket.org',
            // 'version' => '1.0',
            // 'verify'  => true,
        ],

        'alternative' => [
            'username' => 'jamesdordoydev@gmail.com',
            'password' => 'Jdd0rd0y',
            'method'   => 'basic',
            // 'logging'  => false,
            // 'baseUrl'  => 'https://api.bitbucket.org',
            // 'version'  => '1.0',
            // 'verify'   => true,
        ],

        'oauth2' => [
            'consumer_key'    => 'YLVq3gh3QThEs9BF6e',
            'consumer_secret' => 'VEgUK6FnG9VMnBek9PxJEQPw6JU4vxMu',
            'method'          => 'oauth2',
        ],
    ],

];
