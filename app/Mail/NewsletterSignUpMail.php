<?php

namespace App\Mail;

use Illuminate\Support\Facades\URL;
use App\Models\Newsletter;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NewsletterSignUpMail extends Mailable
{
    use Queueable, SerializesModels;

    protected $newsletter;

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
    public function build()
    {
        $unsubscribeUrl = URL::signedRoute('front.get.unsubscribe', [ 'newsletter' => $this->newsletter->id ]);

        return $this->view('mail.newsletter', [
            'newsletter' => $this->newsletter,
            'url' => $unsubscribeUrl
        ]);
    }
}
