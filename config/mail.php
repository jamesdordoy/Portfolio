<?php

return array(

    /*
    |--------------------------------------------------------------------------
    | Default Mailer
    |--------------------------------------------------------------------------
    |
    | This option controls the default mailer that is used to send any email
    | messages sent by your application. Alternative mailers may be setup
    | and used as needed; however, this mailer will be used by default.
    |
    */

    'default' => env('MAIL_MAILER', 'smtp'),

    /*
    |--------------------------------------------------------------------------
    | Mailer Configurations
    |--------------------------------------------------------------------------
    |
    | Here you may configure all of the mailers used by your application plus
    | their respective settings. Several examples have been configured for
    | you and you are free to add your own as your application requires.
    |
    | Laravel supports a variety of mail "transport" drivers to be used while
    | sending an e-mail. You will specify which one you are using for your
    | mailers below. You are free to add additional mailers as required.
    |
    | Supported: "smtp", "sendmail", "mailgun", "ses",
    |            "postmark", "log", "array", "failover"
    |
    */

    'mailers' => array(
        'smtp' => array(
            'transport' => 'smtp',
            'host' => env('MAIL_HOST', 'smtp.mailgun.org'),
            'port' => env('MAIL_PORT', 587),
            'encryption' => env('MAIL_ENCRYPTION', 'tls'),
            'username' => env('MAIL_USERNAME'),
            'password' => env('MAIL_PASSWORD'),
            'timeout' => null,
            'auth_mode' => null,
        ),

        'ses' => array(
            'transport' => 'ses',
        ),

        'mailgun' => array(
            'transport' => 'mailgun',
        ),

        'postmark' => array(
            'transport' => 'postmark',
        ),

        'sendmail' => array(
            'transport' => 'sendmail',
            'path' => '/usr/sbin/sendmail -bs',
        ),

        'log' => array(
            'transport' => 'log',
            'channel' => env('MAIL_LOG_CHANNEL'),
        ),

        'array' => array(
            'transport' => 'array',
        ),

        'failover' => array(
            'transport' => 'failover',
            'mailers' => array(
                'smtp',
                'log',
            ),
        ),
    ),

    /*
    |--------------------------------------------------------------------------
    | Global "From" Address
    |--------------------------------------------------------------------------
    |
    | You may wish for all e-mails sent by your application to be sent from
    | the same address. Here, you may specify a name and address that is
    | used globally for all e-mails that are sent by your application.
    |
    */

    'from' => array(
        'address' => env('MAIL_FROM_ADDRESS', 'hello@example.com'),
        'name' => env('MAIL_FROM_NAME', 'Example'),
    ),

    /*
    |--------------------------------------------------------------------------
    | Markdown Mail Settings
    |--------------------------------------------------------------------------
    |
    | If you are using Markdown based email rendering, you may configure your
    | theme and component paths here, allowing you to customize the design
    | of the emails. Or, you may simply stick with the Laravel defaults!
    |
    */

    'markdown' => array(
        'theme' => 'default',

        'paths' => array(
            resource_path('views/vendor/mail'),
        ),
    ),

);
