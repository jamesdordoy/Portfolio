<?php

namespace App\Models\Data;

use DateTime;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Optional;
use Spatie\LaravelData\Attributes\Validation;
use App\Models\Contact as ContactModel;

class Contact extends Data
{
    public function __construct(
        public int|Optional  $id,
        public string $name,
        public string $email,
        public string $message,
        public DateTime|Optional $created_at,
        public DateTime|Optional $updated_at,
    ) {
    }

    public static function rules(): array
    {
        return [
            'name' => [
                new Validation\Required(),
                new Validation\Min(3),
            ],
            'email' => [
                new Validation\Required(),
                new Validation\Email(),
            ],
            'message' => [
                new Validation\Required(),
                new Validation\Min(5),
            ],
        ];
    }
}
