"use strict";

import AbstractService from './AbstractService.js';

class LanguageService extends AbstractService {

    all() {
        return this.client.get(`/api/languages`);
    }

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

//Create absolute Singleton
const instance = new LanguageService;
Object.freeze(instance);
export default instance;
