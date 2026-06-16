import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import ProjectsSection from '@/components/sections/ProjectsSection.vue';

const makeProject = (id: number, name: string): App.Data.Project => ({
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
        const wrapper = mount(ProjectsSection, {
            global: globalConfig(),
            props: { projects: [makeProject(1, 'Portfolio'), makeProject(2, 'Blog')] },
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
});
