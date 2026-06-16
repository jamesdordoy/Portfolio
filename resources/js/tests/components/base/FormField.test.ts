import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import FormField from '@/components/base/FormField.vue';

const makeForm = (invalid: boolean, message = 'Required') => ({
    invalid: (_field: string) => invalid,
    errors: { email: message } as Record<string, string | undefined>,
});

describe('FormField', () => {
    it('renders the label text', () => {
        const wrapper = mount(FormField, {
            props: { label: 'Email', fieldId: 'email', name: 'email', form: makeForm(false) },
        });
        expect(wrapper.find('label').text()).toBe('Email');
    });

    it('sets the label for attribute to the fieldId', () => {
        const wrapper = mount(FormField, {
            props: { label: 'Email', fieldId: 'contact_email', name: 'email', form: makeForm(false) },
        });
        expect(wrapper.find('label').attributes('for')).toBe('contact_email');
    });

    it('renders slotted content', () => {
        const wrapper = mount(FormField, {
            props: { label: 'Email', fieldId: 'email', name: 'email', form: makeForm(false) },
            slots: { default: '<input id="email" />' },
        });
        expect(wrapper.find('input').exists()).toBe(true);
    });

    it('shows the error message when the field is invalid', () => {
        const wrapper = mount(FormField, {
            props: { label: 'Email', fieldId: 'email', name: 'email', form: makeForm(true, 'Invalid email') },
        });
        expect(wrapper.text()).toContain('Invalid email');
    });

    it('hides the error when the field is valid', () => {
        const wrapper = mount(FormField, {
            props: { label: 'Email', fieldId: 'email', name: 'email', form: makeForm(false) },
        });
        expect(wrapper.text()).not.toContain('Required');
    });
});
