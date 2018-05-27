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
        //
        $models = array(
            'Twitter',
            'GitHub',
        );

        foreach ($models as $model) {
            $this->app->bind("App\\Interfaces\\{$model}Interface", "App\\Services\\{$model}Service");
        }
    }
}
