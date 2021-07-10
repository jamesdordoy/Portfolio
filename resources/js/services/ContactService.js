import AbstractService from './AbstractService';

class ContactService extends AbstractService {
    store(data) {
        return this.client.post(`/contact`, data);
    }

    newsletterSignUp(data) {
        return this.client.post(`/newsletter`, data);
    }
}

const instance = new ContactService();
Object.freeze(instance);
export default instance;
