import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import AppButton from '@/components/base/AppButton.vue';

describe('AppButton', () => {
    it('renders as a button by default', () => {
        const wrapper = mount(AppButton, { slots: { default: 'Click me' } });
        expect(wrapper.element.tagName).toBe('BUTTON');
        expect(wrapper.text()).toBe('Click me');
    });

    it('renders as an anchor when href is provided', () => {
        const wrapper = mount(AppButton, { props: { href: '#projects' } });
        expect(wrapper.element.tagName).toBe('A');
        expect(wrapper.attributes('href')).toBe('#projects');
    });

    it('applies primary variant classes by default', () => {
        const wrapper = mount(AppButton);
        expect(wrapper.attributes('class')).toContain('bg-cyan-600');
    });

    it('applies secondary variant classes', () => {
        const wrapper = mount(AppButton, { props: { variant: 'secondary' } });
        expect(wrapper.attributes('class')).toContain('border-gray-300');
        expect(wrapper.attributes('class')).not.toContain('bg-cyan-600');
    });

    it('applies compact padding', () => {
        const wrapper = mount(AppButton, { props: { size: 'compact' } });
        expect(wrapper.attributes('class')).toContain('px-3');
        expect(wrapper.attributes('class')).toContain('py-2');
    });

    it('forwards the type attribute to the button', () => {
        const wrapper = mount(AppButton, { props: { type: 'submit' } });
        expect(wrapper.attributes('type')).toBe('submit');
    });

    it('sets disabled on the button element', () => {
        const wrapper = mount(AppButton, { props: { disabled: true } });
        expect((wrapper.element as HTMLButtonElement).disabled).toBe(true);
    });

    it('does not set disabled when rendered as an anchor', () => {
        const wrapper = mount(AppButton, { props: { href: '#', disabled: true } });
        expect(wrapper.attributes('disabled')).toBeUndefined();
    });
});
