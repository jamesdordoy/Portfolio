<?php

namespace App\Http\Controllers;

use App\Contracts\Services\ContactServiceContract;
use App\Http\Requests\ContactRequest;
use App\Http\Requests\NewsletterRequest;
use App\Jobs\SendContactConfirmationEmailJob;
use App\Jobs\SendNewsletterEmailJob;
use App\Models\Newsletter;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ContactController extends Controller
{
    private $contactService;

    /**
     * Create a new controller instance.
     *
     * @param ContactServiceContract $contact
     */
    public function __construct(ContactServiceContract $contact)
    {
        $this->contactService = $contact;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ContactRequest $request
     *
     * @return Response
     */
    public function store(ContactRequest $request)
    {
        $contact = $this->contactService->store($request->all());

        if ($contact) {
            SendContactConfirmationEmailJob::dispatch($contact);

            return response()->noContent(Response::HTTP_CREATED);
        }

        return response()->noContent(Response::HTTP_BAD_REQUEST);
    }

    /**
     * Sign up for the newsletter.
     *
     * @param NewsletterRequest $request
     *
     * @return Response
     */
    public function newsletter(NewsletterRequest $request)
    {
        $newsletter = $this->contactService->storeNewsletter($request->input('email'));

        if ($newsletter) {
            SendNewsletterEmailJob::dispatch($newsletter);

            return response()->noContent(Response::HTTP_CREATED);
        }

        return response()->noContent(Response::HTTP_BAD_REQUEST);
    }

    /**
     * Sign up for the newsletter.
     *
     * @param Request    $request
     * @param Newsletter $newsletter
     *
     * @return RedirectResponse|Response
     */
    public function newsletterUnsubscribe(Request $request, Newsletter $newsletter)
    {
        if ($this->contactService->unsubscribeFromNewsletter($newsletter)) {
            return redirect()->route('front.get.index', ['unsubscribed' => 1]);
        }

        return response()->noContent(Response::HTTP_BAD_REQUEST);
    }
}
