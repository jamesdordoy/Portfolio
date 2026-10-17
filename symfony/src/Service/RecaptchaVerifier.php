<?php

declare(strict_types=1);

namespace App\Service;

use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Contracts\HttpClient\HttpClientInterface;

/**
 * Verifies a Google reCAPTCHA v3 token server-side.
 *
 * When RECAPTCHA_SECRET_KEY is blank (the default for local/learning use, since this
 * project ships no real Google credentials) verification is skipped and always passes,
 * rather than requiring every contributor to provision their own reCAPTCHA keys.
 */
readonly class RecaptchaVerifier
{
    private const string SITE_VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify';

    public function __construct(
        private HttpClientInterface $httpClient,
        #[Autowire('%env(RECAPTCHA_SECRET_KEY)%')]
        private string $secretKey,
    ) {
    }

    public function isConfigured(): bool
    {
        return $this->secretKey !== '';
    }

    public function verify(?string $token): bool
    {
        if (!$this->isConfigured()) {
            return true;
        }

        if ($token === null || $token === '') {
            return false;
        }

        $response = $this->httpClient->request('POST', self::SITE_VERIFY_URL, [
            'body' => [
                'secret' => $this->secretKey,
                'response' => $token,
            ],
        ]);

        return (bool) ($response->toArray(false)['success'] ?? false);
    }
}
