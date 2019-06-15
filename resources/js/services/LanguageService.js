"use strict";

import AbstractService from './AbstractService.js';

class LanguageService extends AbstractService {

    create(data) {
        this.client.post(`/api/languages`, data);
    }
};

//Create absoulute Singleton
const instance = new LanguageService;
Object.freeze(instance);
export default instance;