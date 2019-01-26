<?php

namespace App\Services;

use Abraham\TwitterOAuth\TwitterOAuth;

use App\Contracts\Services\TwitterServiceContract;

class TwitterService extends Service implements TwitterServiceContract
{

    private $accessToken;
    private $accessTokenSecret;
    private $consumerKey;
    private $consumerSecret;

    private $conn;

    public function __construct()
    {
        $this->accessToken = config("services.twitter.access_token", "");
        $this->accessTokenSecret = config("services.twitter.token_secret", "");
        $this->consumerKey = config("services.twitter.consumer_key", "");
        $this->consumerSecret = config("services.twitter.consumer_secret", "");

        $this->conn = new TwitterOAuth(
            $this->consumerKey,
            $this->consumerSecret,
            $this->accessToken,
            $this->accessTokenSecret
        );
    }

    public function getStatuses() : array
    {
        return $this->conn->get(
            "statuses/user_timeline",
            [
                "count" => 50,
                "exclude_replies" => true
            ]
        );
    }

    public function postStatus(string $status) : array
    {
        return $this->conn->post("statuses/update", ["status" => $status]);
    }

    public function getAccessToken()
    {
        return $this->accessToken;
    }

    public function getAccessTokenSecret()
    {
        return $this->accessTokenSecret;
    }

    public function getConsumerKey()
    {
        return $this->consumerKey;
    }

    public function getConsumerSecret()
    {
        return $this->consumerSecret;
    }
}
