import AbstractService from './AbstractService';

class PostService extends AbstractService {
    all() {
        return this.client.get(`/api/posts`);
    }

    find(id) {
        return this.client.get(`/api/posts/${id}`);
    }
}

const instance = new PostService();
Object.freeze(instance);
export default instance;
