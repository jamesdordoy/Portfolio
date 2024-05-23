<?php

return [
    'webhook_urls' => [
        'default' => env('DISCORD_ALERT_WEBHOOK'),
    ],
    'job' => Spatie\DiscordAlerts\Jobs\SendToDiscordChannelJob::class,
];
