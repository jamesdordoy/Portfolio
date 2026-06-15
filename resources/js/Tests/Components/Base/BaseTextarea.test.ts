import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseTextarea from '@/Components/Base/BaseTextarea.vue';

describe('BaseTextarea', () => {
    it('renders a textarea element', () => {
        const wrapper = mount(BaseTextarea);
        expect(wrapper.find('textarea').exists()).toBe(true);
    });

    it('emits input event with the typed value', async () => {
        const wrapper = mount(BaseTextarea);
        await wrapper.find('textarea').setValue('hello world');
        expect(wrapper.emitted('input')?.[0]).toEqual(['hello world']);
    });

    it('binds the rows prop', () => {
        const wrapper = mount(BaseTextarea, { props: { rows: 8 } });
        expect(wrapper.find('textarea').attributes('rows')).toBe('8');
    });

    it('binds the placeholder prop', () => {
        const wrapper = mount(BaseTextarea, { props: { placeholder: 'Write here' } });
        expect(wrapper.find('textarea').attributes('placeholder')).toBe('Write here');
    });

    it('defaults to 4 rows', () => {
        const wrapper = mount(BaseTextarea);
        expect(wrapper.find('textarea').attributes('rows')).toBe('4');
    });
});
