"use strict";

import AbstractService from './AbstractService.js';

class ContactService extends AbstractService {

    store(data) {
        return this.client.post(`/contact`, data);
    }

    newsletterSignUp(data) {
        return this.client.post(`/newsletter`, data);
    }
}

//Create absolute Singleton
const instance = new ContactService;
Object.freeze(instance);
export default instance;
