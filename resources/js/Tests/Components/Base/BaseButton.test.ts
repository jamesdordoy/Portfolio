import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseButton from '@/Components/Base/BaseButton.vue';

describe('BaseButton', () => {
    it('renders slot content', () => {
        const wrapper = mount(BaseButton, { slots: { default: 'Click me' } });
        expect(wrapper.text()).toContain('Click me');
    });

    it('renders text prop', () => {
        const wrapper = mount(BaseButton, { props: { text: 'Submit' } });
        expect(wrapper.text()).toContain('Submit');
    });

    it('emits click when the button is clicked', async () => {
        const wrapper = mount(BaseButton);
        await wrapper.find('button').trigger('click');
        expect(wrapper.emitted('click')).toHaveLength(1);
    });

    it('applies primary variant classes', () => {
        const wrapper = mount(BaseButton, { props: { variant: 'primary' } });
        expect(wrapper.find('button').classes().join(' ')).toContain('bg-primary');
    });

    it('applies default variant classes when no variant supplied', () => {
        const wrapper = mount(BaseButton);
        expect(wrapper.find('button').classes().join(' ')).toContain('bg-slate-100');
    });

    it('applies error variant classes', () => {
        const wrapper = mount(BaseButton, { props: { variant: 'error' } });
        expect(wrapper.find('button').classes().join(' ')).toContain('bg-error');
    });
});
