<?php

use App\Dto\User;

test('test_usert_data_object_name', function () {
    $user = User::from([
        'name' => 'Testing',
        'email' => 'test@test.com',
    ]);

    $this->assertEquals($user->name, 'Testing');
});
