<?php

namespace App\Mail;

use App\Models\Contact;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class LetMeKnowMail extends Mailable
{
    use Queueable;
    use SerializesModels;
    
    protected Contact $contact;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Contact $contact)
    {
        $this->contact = $contact;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build(): LetMeKnowMail
    {
        return $this->view('mail.let-me-know', [
            'contact' => $this->contact,
        ]);
    }
}
