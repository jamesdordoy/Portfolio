<?php

use App\Models\Data\TimelineEvent;

test('test_timeline_event_data_object_name', function () {

    $to = new DateTime();
    $from = new DateTime();
    $createdAt = new DateTime();
    $updatedAt = new DateTime();

    $timelineEvent = new TimelineEvent(1, $to, $from, 'test', 'testing', 'fa-icon', 'body text', false, $createdAt, $updatedAt);

    $this->assertEquals($timelineEvent->name, 'test');
});
