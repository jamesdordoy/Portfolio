<?php

use App\Dto\TimelineEvent;

test('test_timeline_event_data_object_name', function () {
    $to = new DateTime();
    $from = new DateTime();

    $timelineEvent = TimelineEvent::from([
        'from' => $from,
        'to' => $to,
        'name' => 'test',
        'title' => 'testing',
        'icon' => 'fa-icon',
        'body' => 'body text',
        'hidden' => false,
    ]);

    $this->assertEquals($timelineEvent->name, 'test');
});
