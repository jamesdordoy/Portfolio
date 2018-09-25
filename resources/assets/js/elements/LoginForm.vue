<template>
  <div>
    <div class="w-full m-auto max-w-sm">
      <div class="text-center text-5xl mt-10 text-blue-dark">
        <font-awesome-icon size="lg" icon="shopping-cart" />
      </div>
      <h2 class="mt-16 text-center font-noto">Login to Simple Shopping</h2>
      <form @submit.prevent="login" class="rounded px-8 pb-8 my-8">
        <!-- Stops Chrome trying to autofill login credentials -->
        <input style="opacity: 0;position: absolute;">
        <input type="password" style="opacity: 0;position: absolute;">

        <div class="mb-4">
          <form-group title="Email Address" for-id="email">
            <email-input id="email" v-model="$v.email.$model">
            </email-input>
          </form-group>
          <div v-if="$v.email.$error">
            <p v-if="!$v.email.required" class="text-red text-xs italic">Please enter an Email.</p>
            <p v-if="!$v.email.minLength" class="text-red text-xs italic">Email Address Too Short</p>
            <p v-if="!$v.email.email" class="text-red text-xs italic">Invalid Email Address</p>
          </div>
        </div>
         <div class="mb-4">
          <form-group title="Password" for-id="password">
            <password-input id="password" v-model="$v.password.$model">
            </password-input>
          </form-group>
          <div v-if="$v.password.$error">
            <p v-if="!$v.password.required" class="text-red text-xs italic">Please choose a password.</p>
            <p v-if="!$v.password.minLength" class="text-red text-xs italic">Password Too Short</p>
          </div>
        </div>
        <div class="flex items-center justify-between mt-6">
          <button
            type="submit"
            :class="{ 'opacity-50 cursor-not-allowed': $v.$invalid }"
            :disabled="$v.$invalid" class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Sign In
          </button>
        </div>
      </form>
      <p class="text-center text-grey text-xs">
        &copy;2018 James Dordoy
      </p>
    </div>
    <vue-snotify></vue-snotify>
  </div>
</template>

<script>
import { auth } from '../firebase';
import { required, minLength, email } from 'vuelidate/lib/validators';

export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  validations: {
      email: {
          required,
          email,
          minLength: minLength(4)
      },
      password: {
          required,
          minLength: minLength(4)
      }
  },
  methods: {
    login() {
      
    }
  }
}
</script>
