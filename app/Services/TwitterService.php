<?php

namespace App\Services;

use Abraham\TwitterOAuth\TwitterOAuth;
use App\Contracts\Services\TwitterServiceContract;

class TwitterService extends Service implements TwitterServiceContract
{
    /**
     * Twitter Access Token.
     */
    private $accessToken;

    /**
     * Twitter Access Token Secret.
     */
    private $accessTokenSecret;

    /**
     * Twitter Consumer Key.
     */
    private $consumerKey;

    /**
     * Twitter Consumer Secret.
     */
    private $consumerSecret;

    /**
     * Twitter Service Connection.
     */
    private $conn;

    /**
     * Service Constructor.
     */
    public function __construct()
    {
        $this->accessToken = config('services.twitter.access_token', '');
        $this->accessTokenSecret = config('services.twitter.token_secret', '');
        $this->consumerKey = config('services.twitter.consumer_key', '');
        $this->consumerSecret = config('services.twitter.consumer_secret', '');

        $this->conn = new TwitterOAuth(
            $this->consumerKey,
            $this->consumerSecret,
            $this->accessToken,
            $this->accessTokenSecret
        );
    }

    /**
     * cULR GET Twitter Statuses.
     *
     * @return array
     */
    public function getStatuses()
    {
        return $this->conn->get(
            'statuses/user_timeline',
            [
                'count'           => 50,
                'exclude_replies' => true,
            ]
        );
    }

    /**
     * cULR POST Create Twitter Status.
     *
     * @param string $status
     *
     * @return array
     */
    public function postStatus(string $status): array
    {
        return $this->conn->post(
            'statuses/update',
            [
                'status' => $status,
            ]
        );
    }

    /**
     * Getter Twitter Access Token.
     *
     * @return string
     */
    public function getAccessToken()
    {
        return $this->accessToken;
    }

    /**
     * Getter Twitter Access Secret.
     *
     * @return string
     */
    public function getAccessTokenSecret()
    {
        return $this->accessTokenSecret;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @return Response
     */
    public function getConsumerKey()
    {
        return $this->consumerKey;
    }

    /**
     * Getter Twitter Consumer Secret.
     *
     * @return string
     */
    public function getConsumerSecret()
    {
        return $this->consumerSecret;
    }
}
