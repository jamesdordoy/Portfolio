<?php

namespace App\Mail;

use App\Models\Contact;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactMeMail extends Mailable
{
    use Queueable;
    use SerializesModels;

    protected $contact;

    /**
     * Create a new message instance.
     *
     * @param Contact $contact
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
    public function build(): ContactMeMail
    {
        return $this->view('mail.contact-me', [
            'contact' => $this->contact,
        ]);
    }
}
