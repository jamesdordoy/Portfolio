import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseInput from '@/Components/Base/BaseInput.vue';

describe('BaseInput', () => {
    it('renders an input element', () => {
        const wrapper = mount(BaseInput);
        expect(wrapper.find('input').exists()).toBe(true);
    });

    it('emits input event with the typed value', async () => {
        const wrapper = mount(BaseInput);
        await wrapper.find('input').setValue('hello');
        expect(wrapper.emitted('input')?.[0]).toEqual(['hello']);
    });

    it('binds the placeholder prop', () => {
        const wrapper = mount(BaseInput, { props: { placeholder: 'Enter name' } });
        expect(wrapper.find('input').attributes('placeholder')).toBe('Enter name');
    });

    it('binds the type prop', () => {
        const wrapper = mount(BaseInput, { props: { type: 'email' } });
        expect(wrapper.find('input').attributes('type')).toBe('email');
    });

    it('disables the input when disabled prop is true', () => {
        const wrapper = mount(BaseInput, { props: { disabled: true } });
        expect((wrapper.find('input').element as HTMLInputElement).disabled).toBe(true);
    });

    it('reflects the value prop', () => {
        const wrapper = mount(BaseInput, { props: { value: 'prefilled' } });
        expect((wrapper.find('input').element as HTMLInputElement).value).toBe('prefilled');
    });
});
