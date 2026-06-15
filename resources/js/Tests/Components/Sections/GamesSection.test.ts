import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia } from 'pinia';
import GamesSection from '@/Components/Sections/GamesSection.vue';

const globalConfig = () => ({
    plugins: [createPinia()],
});

describe('GamesSection', () => {
    it('renders the section heading', () => {
        const wrapper = mount(GamesSection, {
            global: globalConfig(),
            props: { gameClips: [] },
        });
        expect(wrapper.text()).toContain('Game Clips');
    });

    it('renders a section element', () => {
        const wrapper = mount(GamesSection, {
            global: globalConfig(),
            props: { gameClips: [] },
        });
        expect(wrapper.find('section').exists()).toBe(true);
    });

    it('mounts with an empty clips array', () => {
        const wrapper = mount(GamesSection, {
            global: globalConfig(),
            props: { gameClips: [] },
        });
        expect(wrapper.exists()).toBe(true);
    });

    it('mounts with populated clips', () => {
        const clips: App.Dto.GameClip[] = [
            {
                id: 1,
                url: 'https://youtube.com/embed/abc',
                created_at: '2024-01-01',
                updated_at: '2024-01-01',
                game: null,
            },
        ];
        const wrapper = mount(GamesSection, {
            global: globalConfig(),
            props: { gameClips: clips },
        });
        expect(wrapper.exists()).toBe(true);
    });
});
