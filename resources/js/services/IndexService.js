import AbstractService from './AbstractService';

class IndexService extends AbstractService {
    languages() {
        return this.client.get(`/languages`);
    }

    projects() {
        return this.client.get(`/projects`);
    }

    posts() {
        return this.client.get(`/posts`);
    }

    post(id) {
        return this.client.get(`/posts/${id}`);
    }

    tweets() {
        return this.client.get(`/tweets`);
    }

    timeline() {
        return this.client.get(`/timeline`);
    }
}

const instance = new IndexService();
Object.freeze(instance);
export default instance;
