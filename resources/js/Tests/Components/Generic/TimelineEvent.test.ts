import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia } from 'pinia';
import TimelineEvent from '@/Components/Generic/TimelineEvent.vue';

const makeEvent = (overrides: Partial<App.Dto.TimelineEvent> = {}): App.Dto.TimelineEvent => ({
    id: 1,
    from: '2020-01-01',
    to: '2022-01-01',
    name: 'Acme Corp',
    title: 'Senior Developer',
    icon: 'code',
    body: '<p>Built many great things.</p>',
    hidden: false,
    ...overrides,
});

const globalConfig = () => ({
    plugins: [createPinia()],
});

describe('TimelineEvent', () => {
    it('renders the event name', () => {
        const wrapper = mount(TimelineEvent, {
            global: globalConfig(),
            props: { event: makeEvent({ name: 'Big Corp' }) },
        });
        expect(wrapper.text()).toContain('Big Corp');
    });

    it('renders the event title', () => {
        const wrapper = mount(TimelineEvent, {
            global: globalConfig(),
            props: { event: makeEvent({ title: 'Lead Engineer' }) },
        });
        expect(wrapper.text()).toContain('Lead Engineer');
    });

    it('renders the odd-id layout (right panel) when id is odd', () => {
        const wrapper = mount(TimelineEvent, {
            global: globalConfig(),
            props: { event: makeEvent({ id: 1 }) },
        });
        // Odd id: content is in w-4/5 on the left, icon on the right
        expect(wrapper.find('.w-4\\/5').exists()).toBe(true);
    });

    it('renders the even-id layout (left panel) when id is even', () => {
        const wrapper = mount(TimelineEvent, {
            global: globalConfig(),
            props: { event: makeEvent({ id: 2 }) },
        });
        // Even id renders via v-else branch
        expect(wrapper.find('.w-4\\/5').exists()).toBe(true);
    });

    it('renders body HTML via v-html', () => {
        const wrapper = mount(TimelineEvent, {
            global: globalConfig(),
            props: { event: makeEvent({ body: '<p>Test body</p>' }) },
        });
        expect(wrapper.find('p').exists()).toBe(true);
    });
});
