import axios from 'axios';

type ExecuteRecaptcha = (_action?: string) => Promise<string>;
type RecaptchaLoaded = () => Promise<boolean>;

export default async function checkRecapture(
    executeRecaptcha: ExecuteRecaptcha,
    recaptchaLoaded: RecaptchaLoaded
): Promise<boolean> {
    await recaptchaLoaded();

    const token = await executeRecaptcha('login');

    const response = await axios.get<{ success: boolean }>('/recaptcha/validate', {
        params: { token },
    });

    return response?.data?.success;
}
