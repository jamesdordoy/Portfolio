"use strict";

import AbstractService from './AbstractService.js';

class IndexService extends AbstractService {

    languages() {
        return this.client.get(`/languages`);
    }

    projects() {
        return this.client.get(`/projects`);
    }

    tweets() {
        return this.client.get(`/tweets`);
    }
};

//Create absoulute Singleton
const instance = new IndexService;
Object.freeze(instance);
export default instance;