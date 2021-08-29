<?php

namespace App\Contracts\Services;

use App\Models\Contact;
use App\Models\Newsletter;

interface ContactServiceContract
{

    /**
     * store
     *
     * @param  array $data
     * @return Contact
     */
    public function store(array $data): Contact;
    
    /**
     * storeNewsletter
     *
     * @param  mixed $email
     * @return Newsletter
     */
    public function storeNewsletter(string $email): Newsletter;
    
    /**
     * unsubscribeFromNewsletter
     *
     * @param  mixed $newsletter
     * @return bool
     */
    public function unsubscribeFromNewsletter(Newsletter $newsletter): bool;
    
    /**
     * sendContactMeEmail
     *
     * @param  mixed $contact
     * @return void
     */
    public function sendContactMeEmail(Contact $contact): void;
    
    /**
     * sendLetMeKnowEmail
     *
     * @param  mixed $contact
     * @return void
     */
    public function sendLetMeKnowEmail(Contact $contact): void;
    
    /**
     * sendNewsLetterEmail
     *
     * @param  mixed $newsletter
     * @return void
     */
    public function sendNewsLetterEmail(Newsletter $newsletter): void;
}
