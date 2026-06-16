import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Project from '@/components/generic/Project.vue';

const makeProject = (overrides: Partial<App.Data.Project> = {}): App.Data.Project => ({
    id: 1,
    name: 'Portfolio',
    description: 'My personal portfolio site',
    owner: 'James',
    link: 'https://jamesdordoy.co.uk',
    icon: '/images/portfolio.png',
    complete: true,
    private: false,
    created_at: '2024-01-01',
    updated_at: '2024-01-01',
    tags: [],
    ...overrides,
});

describe('Project', () => {
    it('renders the project name', () => {
        const wrapper = mount(Project, { props: { project: makeProject({ name: 'My App' }) } });
        expect(wrapper.text()).toContain('My App');
    });

    it('renders the project description', () => {
        const wrapper = mount(Project, { props: { project: makeProject({ description: 'An awesome app' }) } });
        expect(wrapper.text()).toContain('An awesome app');
    });

    it('links to the project url', () => {
        const wrapper = mount(Project, { props: { project: makeProject({ link: 'https://example.com' }) } });
        expect(wrapper.findAll('a').some((a) => a.attributes('href') === 'https://example.com')).toBe(true);
    });

    it('renders the project icon', () => {
        const wrapper = mount(Project, { props: { project: makeProject({ icon: '/images/myapp.png' }) } });
        expect(wrapper.find('img').attributes('src')).toBe('/images/myapp.png');
    });

    it('falls back to the default icon when icon is empty string', () => {
        const wrapper = mount(Project, { props: { project: makeProject({ icon: '' }) } });
        expect(wrapper.find('img').attributes('src')).toBe('/images/projects/simple-shopping.png');
    });

    it('falls back to the default icon when icon is null', () => {
        const wrapper = mount(Project, { props: { project: makeProject({ icon: null }) } });
        expect(wrapper.find('img').attributes('src')).toBe('/images/projects/simple-shopping.png');
    });

    it('renders tag names', () => {
        const project = makeProject({
            tags: [
                {
                    id: 1,
                    taggable_id: '1',
                    taggable_type: 'App\\Models\\Tag',
                    taggable: { id: 1, name: 'Vue.js', description: '', created_at: null, updated_at: null },
                    created_at: '2024-01-01',
                    updated_at: '2024-01-01',
                },
            ],
        });
        const wrapper = mount(Project, { props: { project } });
        expect(wrapper.text()).toContain('Vue.js');
    });
});
