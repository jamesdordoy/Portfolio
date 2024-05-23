<?php

return [
    'api_site_key' => env('RECAPTCHA_SITE_KEY', ''),
    'api_secret_key' => env('RECAPTCHA_SECRET_KEY', ''),
    'version' => 'v3',
    'curl_timeout' => 10,
    'skip_ip' => env('RECAPTCHA_SKIP_IP', []),
    'default_validation_route' => 'recaptcha/validate',
    'default_token_parameter_name' => 'token',
    'default_language' => null,
    'default_form_id' => 'biscolab-recaptcha-invisible-form',
    'explicit' => false,
    'api_domain' => 'www.google.com',
    'empty_message' => false,
    'error_message_key' => 'validation.recaptcha',
    'tag_attributes' => [
        'theme' => 'light',
        'size' => 'normal',
        'tabindex' => 0,
        'callback' => null,
        'expired-callback' => null,
        'error-callback' => null,
    ],
];
