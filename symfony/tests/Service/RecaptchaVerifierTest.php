<?php

declare(strict_types=1);

namespace App\Tests\Service;

use App\Service\RecaptchaVerifier;
use PHPUnit\Framework\TestCase;
use Symfony\Component\HttpClient\MockHttpClient;
use Symfony\Component\HttpClient\Response\MockResponse;

final class RecaptchaVerifierTest extends TestCase
{
    public function testVerificationIsSkippedWhenNoSecretIsConfigured(): void
    {
        $verifier = new RecaptchaVerifier(new MockHttpClient(), secretKey: '');

        self::assertFalse($verifier->isConfigured());
        self::assertTrue($verifier->verify(null));
        self::assertTrue($verifier->verify('any-token'));
    }

    public function testBlankTokenFailsWhenConfigured(): void
    {
        $verifier = new RecaptchaVerifier(new MockHttpClient(), secretKey: 'a-secret');

        self::assertTrue($verifier->isConfigured());
        self::assertFalse($verifier->verify(null));
        self::assertFalse($verifier->verify(''));
    }

    public function testSuccessfulGoogleResponsePasses(): void
    {
        $httpClient = new MockHttpClient(
            new MockResponse(json_encode(['success' => true]) ?: '{}'),
        );

        $verifier = new RecaptchaVerifier($httpClient, secretKey: 'a-secret');

        self::assertTrue($verifier->verify('a-valid-token'));
    }

    public function testFailedGoogleResponseFails(): void
    {
        $httpClient = new MockHttpClient(
            new MockResponse(json_encode(['success' => false, 'error-codes' => ['invalid-input-response']]) ?: '{}'),
        );

        $verifier = new RecaptchaVerifier($httpClient, secretKey: 'a-secret');

        self::assertFalse($verifier->verify('a-bad-token'));
    }
}
