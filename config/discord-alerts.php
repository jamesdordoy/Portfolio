<?php

use Spatie\DiscordAlerts\Jobs\SendToDiscordChannelJob;

return [
    'webhook_urls' => [
        'default' => env('DISCORD_ALERT_WEBHOOK'),
    ],
    'job' => SendToDiscordChannelJob::class,
];
