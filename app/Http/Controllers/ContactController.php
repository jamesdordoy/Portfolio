<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Carbon\Carbon;
use App\Models\Contact;
use App\Jobs\SendNewsletterEmailJob;
use App\Http\Controllers\Controller;
use App\Http\Requests\ContactRequest;
use App\Http\Requests\NewsletterRequest;
use App\Jobs\SendContactConfirmationEmailJob;
use App\Contracts\Services\ContactServiceContract;

class ContactController extends Controller
{
    private $contact;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(ContactServiceContract $contact)
    {
        $this->contact = $contact;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ContactRequest $request)
    {
        $contact = $this->contact->store($request->all());

        if ($contact) {
            SendContactConfirmationEmailJob::dispatch($contact)
                ->delay(now()->addSeconds(10));
            
            return 200;
        }
    }

    /**
     * Sign up for the Dordoy newsletter
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function newsletter(NewsletterRequest $request)
    {
        $newsletter = $this->contact->storeNewsletter($request->input("email"));

        if ($newsletter) {
            SendNewsletterEmailJob::dispatch($newsletter)
                ->delay(now()->addSeconds(10));

            // $this->contact->sendNewsLetterEmail($newsletter);
            
            return 200;
        }
    }
}
