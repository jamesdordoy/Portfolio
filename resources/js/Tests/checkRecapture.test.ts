import { describe, expect, it, vi } from 'vitest';
import axios from 'axios';
import checkRecapture from '@/checkRecapture';

vi.mock('axios');

describe('checkRecapture', () => {
    it('returns true when the recaptcha endpoint reports success', async () => {
        const executeRecaptcha = vi.fn().mockResolvedValue('token-ok');
        const recaptchaLoaded = vi.fn().mockResolvedValue(true);
        vi.mocked(axios.get).mockResolvedValue({ data: { success: true } });

        const result = await checkRecapture(executeRecaptcha, recaptchaLoaded);

        expect(result).toBe(true);
    });

    it('returns false when the recaptcha endpoint reports failure', async () => {
        const executeRecaptcha = vi.fn().mockResolvedValue('token-bad');
        const recaptchaLoaded = vi.fn().mockResolvedValue(true);
        vi.mocked(axios.get).mockResolvedValue({ data: { success: false } });

        const result = await checkRecapture(executeRecaptcha, recaptchaLoaded);

        expect(result).toBe(false);
    });

    it('waits for recaptcha to load before executing', async () => {
        const order: string[] = [];
        const recaptchaLoaded = vi.fn().mockImplementation(async () => {
            order.push('loaded');
        });
        const executeRecaptcha = vi.fn().mockImplementation(async () => {
            order.push('execute');
            return 'token';
        });
        vi.mocked(axios.get).mockResolvedValue({ data: { success: true } });

        await checkRecapture(executeRecaptcha, recaptchaLoaded);

        expect(order).toEqual(['loaded', 'execute']);
    });

    it('calls executeRecaptcha with the "login" action', async () => {
        const executeRecaptcha = vi.fn().mockResolvedValue('token');
        const recaptchaLoaded = vi.fn().mockResolvedValue(true);
        vi.mocked(axios.get).mockResolvedValue({ data: { success: true } });

        await checkRecapture(executeRecaptcha, recaptchaLoaded);

        expect(executeRecaptcha).toHaveBeenCalledWith('login');
    });

    it('sends the token as a query param to /recaptcha/validate', async () => {
        const executeRecaptcha = vi.fn().mockResolvedValue('my-token');
        const recaptchaLoaded = vi.fn().mockResolvedValue(true);
        vi.mocked(axios.get).mockResolvedValue({ data: { success: true } });

        await checkRecapture(executeRecaptcha, recaptchaLoaded);

        expect(axios.get).toHaveBeenCalledWith('/recaptcha/validate', {
            params: { token: 'my-token' },
        });
    });
});
