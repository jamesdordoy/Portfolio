<?php

namespace App\Models\Data;

use App\Models\Newsletter as NewsletterModel;
use DateTime;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Optional;
use Spatie\LaravelData\Attributes\Validation;

class Newsletter extends Data
{
    public function __construct(
        public int|Optional $id,
        public string $email,
        public DateTime|Optional $created_at,
        public DateTime|Optional $updated_at,
    ) {
    }


    public static function rules(): array
    {
        return [
            'email' => [
                new Validation\Required(),
                new Validation\Unique(
                    table: NewsletterModel::class
                ),
                new Validation\Email(),
            ],
        ];
    }
}
