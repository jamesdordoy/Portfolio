<x-mail::message>
# Thanks for reaching out to me!

Hi {{ $contact->name }}

Thanks for getting in contact with me. I will aim to give you a response to your query within a week.

Kind Regards,

[{{ config('app.name') }}]({{ config('app.url') }})

</x-mail::message>
