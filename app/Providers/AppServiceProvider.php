<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $services = array(
            'TwitterService' => 'TwitterServiceContract',
            'GitHubService' => 'GithubServiceContract',
            'LanguageService' => 'LanguageServiceContract',
        );

        foreach ($services as $service => $contract) {
            $this->app->bind("App\\Contracts\\Services\\{$contract}", "App\\Services\\{$service}");
        }
    }
}
