<?php

namespace App\Dto;

use App\Models\Newsletter as NewsletterModel;
use DateTime;
use Spatie\LaravelData\Attributes\Validation;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Optional;

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
