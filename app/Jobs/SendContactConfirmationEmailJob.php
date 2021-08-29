<?php

namespace App\Jobs;

use App\Contracts\Services\ContactServiceContract;
use App\Models\Contact;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SendContactConfirmationEmailJob implements ShouldQueue
{
    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

    private Contact $contact;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(Contact $contact)
    {
        $this->contact = $contact;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle(ContactServiceContract $contactService): void
    {
        $contactService->sendContactMeEmail($this->contact);
        $contactService->sendLetMeKnowEmail($this->contact);
    }
}
