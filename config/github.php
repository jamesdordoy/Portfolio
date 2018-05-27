<?php

declare(strict_types=1);

/*
 * This file is part of Laravel GitHub.
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
    | GitHub Connections
    |--------------------------------------------------------------------------
    |
    | Here are each of the connections setup for your application. Example
    | configuration has been included, but you may add as many connections as
    | you would like. Note that the 4 supported authentication methods are:
    | "application", "jwt", "password", and "token".
    |
    */

    'connections' => [

        'main' => [
            'token'      => '1884f6c8dfd4cd0064b28500db387d9f3054bad1',
            'method'     => 'token',
            // 'backoff'    => false,
            // 'cache'      => false,
            // 'version'    => 'v3',
            // 'enterprise' => false,
        ],

        'app' => [
            'clientId'     => 'Iv1.321170a889397ecf',
            'clientSecret' => '0d8d136252869c8dc41b736d334a2d0be9ced9ac',
            'method'       => 'application',
            // 'backoff'      => false,
            // 'cache'        => false,
            // 'version'      => 'v3',
            // 'enterprise'   => false,
        ],

        'jwt' => [
            'token'        => 'your-jwt-token',
            'method'       => 'jwt',
            // 'backoff'      => false,
            // 'cache'        => false,
            // 'version'      => 'v3',
            // 'enterprise'   => false,
        ],

        'other' => [
            'username'   => 'jamesdordoy',
            'password'   => 'Jdd0rd0y',
            'method'     => 'Jdd0rd0y',
            // 'backoff'    => false,
            // 'cache'      => false,
            // 'version'    => 'v3',
            // 'enterprise' => false,
        ],

    ],

];
