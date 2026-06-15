import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseTag from '@/Components/Base/BaseTag.vue';

describe('BaseTag', () => {
    it('renders the name with a # prefix', () => {
        const wrapper = mount(BaseTag, { props: { name: 'vue' } });
        expect(wrapper.text()).toContain('#vue');
    });

    it('renders with an empty name by default', () => {
        const wrapper = mount(BaseTag);
        expect(wrapper.find('span').exists()).toBe(true);
    });

    it('renders the correct name', () => {
        const wrapper = mount(BaseTag, { props: { name: 'typescript' } });
        expect(wrapper.text()).toContain('#typescript');
    });
});
