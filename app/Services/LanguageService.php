<?php

namespace App\Services;

use App\Models\Language;
use App\Contracts\Services\LanguageServiceContract;

class LanguageService extends Service implements LanguageServiceContract
{

    public function __construct()
    {

    }

    public function all()
    {
        return Language::orderBy('id', 'ASC')->get();
    }

    public function store()
    {
        
    }
}
