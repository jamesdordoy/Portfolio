<?php

namespace App\Providers;

use App\Traits\Serviceable;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    use Serviceable;

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
        $this->registerServices();
    }
}
