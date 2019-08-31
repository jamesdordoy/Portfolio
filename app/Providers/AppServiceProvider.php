<?php

namespace App\Providers;

use App\Traits\Serviceable;
use Illuminate\Support\ServiceProvider;
use App\Contracts\Services\ServiceContract;

class AppServiceProvider extends ServiceProvider implements ServiceContract
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
