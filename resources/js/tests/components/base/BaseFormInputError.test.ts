import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseFormInputError from '@/components/base/BaseFormInputError.vue';

const makeForm = (invalid: boolean, message = 'This field is required') => ({
    invalid: (_field: string) => invalid,
    errors: { name: message } as Record<string, string | undefined>,
});

describe('BaseFormInputError', () => {
    it('renders the error message when the field is invalid', () => {
        const wrapper = mount(BaseFormInputError, {
            props: { name: 'name', form: makeForm(true, 'Name is required') },
        });
        expect(wrapper.text()).toContain('Name is required');
    });

    it('does not render when the field is valid', () => {
        const wrapper = mount(BaseFormInputError, {
            props: { name: 'name', form: makeForm(false) },
        });
        expect(wrapper.find('div').exists()).toBe(false);
    });

    it('shows the correct error for the given field', () => {
        const form = {
            invalid: (field: string) => field === 'email',
            errors: { email: 'Invalid email address' } as Record<string, string | undefined>,
        };
        const wrapper = mount(BaseFormInputError, {
            props: { name: 'email', form },
        });
        expect(wrapper.text()).toContain('Invalid email address');
    });
});
