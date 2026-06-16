import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import PortfolioTag from '@/components/generic/PortfolioTag.vue';

describe('PortfolioTag', () => {
    it('renders the tag name', () => {
        const wrapper = mount(PortfolioTag, { props: { name: 'typescript' } });
        expect(wrapper.text()).toContain('typescript');
    });

    it('uses the default name "tag" when none is provided', () => {
        const wrapper = mount(PortfolioTag, {});
        expect(wrapper.text()).toContain('tag');
    });

    it('applies the tag class', () => {
        const wrapper = mount(PortfolioTag, { props: { name: 'laravel' } });
        expect(wrapper.classes()).toContain('tag');
    });
});
