import { assert, describe, expect, it, vi, test } from 'vitest';
import { config, shallowMount, mount } from '@vue/test-utils';
import BaseButton from '@/Components/Base/BaseButton.vue';

describe('BaseButton', () => {
    it('renders', async () => {
        const wrapper = mount(BaseButton, {
            props: {
                text: 'Button',
                variant: 'primary',
            },
        });

        wrapper.vm.$emit('click');

        await wrapper.vm.$nextTick();

        expect(wrapper.emitted().click).toBeTruthy();
        expect(wrapper).toBeTruthy();
    });
});
