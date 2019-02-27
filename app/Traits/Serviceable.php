<?php

namespace App\Traits;

trait Serviceable
{
    /**
     * Get all of the Tags for the Project.
     */
    public function registerServices()
    {
        foreach (config('services.jamesdordoy') as $service => $contract) {
            $this->app->bind("App\\Contracts\\Services\\{$contract}", "App\\Services\\{$service}");
        }
    }
}
