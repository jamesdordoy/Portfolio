import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia } from 'pinia';
import MyExperianceSection from '@/components/sections/MyExperianceSection.vue';

const makeEvent = (id: number): App.Dto.TimelineEvent => ({
    id,
    from: '2020-01-01',
    to: '2022-01-01',
    name: `Company ${id}`,
    title: 'Developer',
    icon: 'code',
    body: '<p>Did great work.</p>',
    hidden: false,
});

const globalConfig = () => ({
    plugins: [createPinia()],
});

describe('MyExperianceSection', () => {
    it('renders the section heading', () => {
        const wrapper = mount(MyExperianceSection, {
            global: globalConfig(),
            props: { timeline: [] },
        });
        expect(wrapper.text()).toContain('My Experience');
    });

    it('renders a TimelineEvent for each item', () => {
        const wrapper = mount(MyExperianceSection, {
            global: globalConfig(),
            props: { timeline: [makeEvent(1), makeEvent(2)] },
        });
        expect(wrapper.text()).toContain('Company 1');
        expect(wrapper.text()).toContain('Company 2');
    });

    it('renders nothing in the timeline with an empty array', () => {
        const wrapper = mount(MyExperianceSection, {
            global: globalConfig(),
            props: { timeline: [] },
        });
        expect(wrapper.findAll('article')).toHaveLength(0);
    });
});
