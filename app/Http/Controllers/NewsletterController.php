<?php

namespace App\Http\Controllers;

use App\Actions\Newsletter\CreateNewsletter;
use App\Models\Data\Newsletter as NewsletterData;
use Illuminate\Http\Request;

class NewsletterController extends Controller
{
    public function store(NewsletterData $request)
    {
        $data = NewsletterData::from($request->only('email'));

        $creator = app(CreateNewsletter::class);

        $newsletter = $creator->create($data);

        return redirect($creator->redirectTo());
    }

    public function destroy()
    {
    }
}
