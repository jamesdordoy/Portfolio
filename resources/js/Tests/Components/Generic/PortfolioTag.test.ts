import { describe, expect, it, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import PortfolioTag from '@/Components/Generic/PortfolioTag.vue';

describe('PortfolioTag', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('renders the tag name with a # prefix', () => {
        const wrapper = mount(PortfolioTag, {
            global: { plugins: [createPinia()] },
            props: { name: 'typescript' },
        });
        expect(wrapper.text()).toContain('#typescript');
    });

    it('uses the default name "tag" when none is provided', () => {
        const wrapper = mount(PortfolioTag, {
            global: { plugins: [createPinia()] },
        });
        expect(wrapper.text()).toContain('#tag');
    });
});
