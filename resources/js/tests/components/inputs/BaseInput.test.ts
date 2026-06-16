import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseInput from '@/components/inputs/BaseInput.vue';

describe('BaseInput', () => {
    it('renders an input element', () => {
        const wrapper = mount(BaseInput);
        expect(wrapper.find('input').exists()).toBe(true);
    });

    it('passes through type attribute', () => {
        const wrapper = mount(BaseInput, { attrs: { type: 'email' } });
        expect(wrapper.find('input').attributes('type')).toBe('email');
    });

    it('passes through placeholder attribute', () => {
        const wrapper = mount(BaseInput, { attrs: { placeholder: 'Enter email' } });
        expect(wrapper.find('input').attributes('placeholder')).toBe('Enter email');
    });

    it('applies default md padding', () => {
        const wrapper = mount(BaseInput);
        expect(wrapper.find('input').attributes('class')).toContain('px-4');
        expect(wrapper.find('input').attributes('class')).toContain('py-2.5');
    });

    it('applies sm padding when size is sm', () => {
        const wrapper = mount(BaseInput, { props: { size: 'sm' } });
        expect(wrapper.find('input').attributes('class')).toContain('px-3');
        expect(wrapper.find('input').attributes('class')).toContain('py-2');
        expect(wrapper.find('input').attributes('class')).not.toContain('px-4');
    });
});
