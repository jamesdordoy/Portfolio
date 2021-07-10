import AbstractService from './AbstractService';

class RecaptureService extends AbstractService {
    async validateToken(token) {
        return this.client.get(`/recaptcha/validate`, {
            params: {
                token,
            },
        });
    }
}

const instance = new RecaptureService();
Object.freeze(instance);
export default instance;
