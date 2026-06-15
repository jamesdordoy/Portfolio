import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia } from 'pinia';
import ProjectsSection from '@/Components/Sections/ProjectsSection.vue';

const makeProject = (id: number, name: string): App.Dto.Project => ({
    id,
    name,
    description: `Description for ${name}`,
    owner: 'James',
    link: `https://example.com/${id}`,
    icon: '/images/test.png',
    complete: true,
    private: false,
    created_at: '2024-01-01',
    updated_at: '2024-01-01',
    tags: [],
});

const globalConfig = () => ({
    plugins: [createPinia()],
    stubs: {
        Swiper: { template: '<div><slot /></div>' },
        SwiperSlide: { template: '<div><slot /></div>' },
    },
});

describe('ProjectsSection', () => {
    it('renders the section heading', () => {
        const wrapper = mount(ProjectsSection, {
            global: globalConfig(),
            props: { projects: [] },
        });
        expect(wrapper.text()).toContain('Projects');
    });

    it('renders a Project card for each project', () => {
        const projects = [makeProject(1, 'Portfolio'), makeProject(2, 'Blog')];
        const wrapper = mount(ProjectsSection, {
            global: globalConfig(),
            props: { projects },
        });
        expect(wrapper.text()).toContain('Portfolio');
        expect(wrapper.text()).toContain('Blog');
    });

    it('renders no project cards for an empty array', () => {
        const wrapper = mount(ProjectsSection, {
            global: globalConfig(),
            props: { projects: [] },
        });
        expect(wrapper.findAll('article')).toHaveLength(0);
    });

    it('renders a section element', () => {
        const wrapper = mount(ProjectsSection, {
            global: globalConfig(),
            props: { projects: [] },
        });
        expect(wrapper.find('section').exists()).toBe(true);
    });
});
