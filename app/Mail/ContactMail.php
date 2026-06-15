<?php

namespace App\Mail;

use App\Models\Contact;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Queue\SerializesModels;

class ContactMail extends Mailable
{
    use Queueable;
    use SerializesModels;

    public function __construct(protected Contact $contact)
    {
        //
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'mail.contact',
            with: [
                'contact' => $this->contact,
            ],
        );
    }
}
