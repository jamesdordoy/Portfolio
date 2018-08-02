<template>

<div class="contact">
    <span class="anchor" id="contact"></span>
    <h2>Contact Me</h2>

    <form method="POST" class="contact_form" action="/contact">
        <input type="hidden" name="_token" :value="csrf_token" />
        <p>Please leave your details &amp; a short message &amp; I will get back to you.</p>

        <div class="form-group">
            <label class="form-check-label" for="contact_name">Name:</label>
            <input
                class="form-control"
                type="text"
                name="name"
                placeholder="Joe Bloggs"/>
        </div>

        <div class="form-group">
            <label class="form-check-label" for="email">E-Mail:</label>
            <input
                class="form-control"
                type="email"
                name="email"
                id="email"
                placeholder="example@hotmail.com"/>
        </div>
        <br>

        <div class="form-group">
            <label class="form-check-label" for="message">Message:</label>
            <textarea
                class="form-control"
                rows="10"
                name="message"
                id="message"
                placeholder="Hello, World!">
            </textarea>
        </div>
        <br>

        <button class="contact_submit btn">Submit</button>
    </form>
</div>

</template>

<style>

</style>

<script>

export default{

    props: {

    },

    data: function(){
        return {
            list: '',
        };
    },

    created: function(){

    },
    computed: {
        csrf_token:  function(){
            return $('meta[name="csrf-token"]').attr('content')
        }
    }

}

</script>
