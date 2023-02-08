import axios from 'axios';

export default async function checkRecapture(executeRecaptcha, recaptchaLoaded) {
    await recaptchaLoaded();

    const token = await executeRecaptcha('login');

    const response = await axios.get(`/recaptcha/validate`, {
        params: {
            token,
        },
    });

    return response?.data?.success;
}
