import AbstractService from './AbstractService';

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
            headers: {},
        });
    }
}

const instance = new LanguageService();
Object.freeze(instance);
export default instance;
