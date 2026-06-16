import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import TimelineEvent from '@/components/generic/TimelineEvent.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faBuilding, faSchool } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCode, faBuilding, faSchool);

const makeEvent = (overrides: Partial<App.Data.TimelineEvent> = {}): App.Data.TimelineEvent => ({
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
    components: { FontAwesomeIcon },
});

describe('TimelineEvent', () => {
    it('renders the event name', () => {
        const wrapper = mount(TimelineEvent, {
            global: globalConfig(),
            props: { event: makeEvent({ name: 'Big Corp' }), index: 1 },
        });
        expect(wrapper.text()).toContain('Big Corp');
    });

    it('renders the event title', () => {
        const wrapper = mount(TimelineEvent, {
            global: globalConfig(),
            props: { event: makeEvent({ title: 'Lead Engineer' }), index: 1 },
        });
        expect(wrapper.text()).toContain('Lead Engineer');
    });

    it('renders the from date', () => {
        const wrapper = mount(TimelineEvent, {
            global: globalConfig(),
            props: { event: makeEvent({ from: '2020-01-01' }), index: 1 },
        });
        expect(wrapper.text()).toContain('01/01/2020');
    });

    it('renders body HTML via v-html', () => {
        const wrapper = mount(TimelineEvent, {
            global: globalConfig(),
            props: { event: makeEvent({ body: '<p>Test body</p>' }), index: 1 },
        });
        expect(wrapper.find('p').exists()).toBe(true);
    });

    it('applies lg:flex-row on even index', () => {
        const wrapper = mount(TimelineEvent, {
            global: globalConfig(),
            props: { event: makeEvent(), index: 2 },
        });
        expect(wrapper.attributes('class')).toContain('lg:flex-row');
    });

    it('applies lg:flex-row-reverse on odd index', () => {
        const wrapper = mount(TimelineEvent, {
            global: globalConfig(),
            props: { event: makeEvent(), index: 1 },
        });
        expect(wrapper.attributes('class')).toContain('lg:flex-row-reverse');
    });
});
