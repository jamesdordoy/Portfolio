<?php

namespace App\Mail;

use App\Models\Newsletter;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NewsletterSignUpMail extends Mailable
{
    use Queueable;
    use SerializesModels;

    protected Newsletter $newsletter;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Newsletter $newsletter)
    {
        $this->newsletter = $newsletter;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build(): NewsletterSignUpMail
    {
        return $this->view('mail.newsletter', [
            'newsletter' => $this->newsletter,
        ]);
    }
}
