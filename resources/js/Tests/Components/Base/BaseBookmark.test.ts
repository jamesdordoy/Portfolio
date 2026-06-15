import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseBookmark from '@/Components/Base/BaseBookmark.vue';

describe('BaseBookmark', () => {
    it('renders a span with the given id', () => {
        const wrapper = mount(BaseBookmark, { props: { id: 'about' } });
        expect(wrapper.find('#about').exists()).toBe(true);
    });

    it('renders different ids correctly', () => {
        const wrapper = mount(BaseBookmark, { props: { id: 'projects' } });
        expect(wrapper.find('#projects').exists()).toBe(true);
        expect(wrapper.find('#about').exists()).toBe(false);
    });
});
