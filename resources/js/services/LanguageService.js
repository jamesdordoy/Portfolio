"use strict";

import AbstractService from './AbstractService.js';

class LanguageService extends AbstractService {

    find(id) {
        return this.client.get(`/api/languages/${id}`);
    }

    create(data) {
        return this.client.post(`/api/languages`, data);
    }

    update(id, data) {
        return this.client.post(`/api/languages/${id}`, data, {
            headers: { 
            }
        });
    }
};

//Create absoulute Singleton
const instance = new LanguageService;
Object.freeze(instance);
export default instance;