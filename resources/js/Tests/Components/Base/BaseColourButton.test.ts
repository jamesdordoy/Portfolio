import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseColourButton from '@/Components/Base/BaseColourButton.vue';

describe('BaseColourButton', () => {
    it('defaults to blue', () => {
        const wrapper = mount(BaseColourButton);
        expect(wrapper.find('button').classes().join(' ')).toContain('bg-blue-500');
    });

    it('applies the provided colour', () => {
        const wrapper = mount(BaseColourButton, { props: { colour: 'red' } });
        expect(wrapper.find('button').classes().join(' ')).toContain('bg-red-500');
    });

    it('renders a button element', () => {
        const wrapper = mount(BaseColourButton);
        expect(wrapper.find('button').exists()).toBe(true);
    });
});
