"use strict";

import AbstractService from './AbstractService.js';

class PostService extends AbstractService {

    all() {
        return this.client.get(`/api/posts`);
    }

    find(id) {
        return this.client.get(`/api/posts/${id}`);
    }
};

//Create absolute Singleton
const instance = new PostService;
Object.freeze(instance);
export default instance;
