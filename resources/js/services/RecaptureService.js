"use strict";

import AbstractService from './AbstractService.js';

class RecaptureService extends AbstractService {

    async validateToken(token) {
        return this.client.get(`/recaptcha/validate`, {
            params: {
                token
            }
        });
    }
}

//Create absolute Singleton
const instance = new RecaptureService;
Object.freeze(instance);
export default instance;
