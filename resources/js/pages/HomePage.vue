<script lang="ts" setup>
import NavigationMenu from '@/components/generic/NavigationMenu.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import PageSection from '@/components/base/PageSection.vue';
import AboutMeSection from '@/components/sections/AboutMeSection.vue';
import ProjectsSection from '@/components/sections/ProjectsSection.vue';
import MyExperienceSection from '@/components/sections/MyExperianceSection.vue';
import ContactMeSection from '@/components/sections/ContactMeSection.vue';
import Footer from '@/components/generic/Footer.vue';

withDefaults(
    defineProps<{
        homePage: App.Dto.Pages.HomePage;
        errors?: Record<string, string>;
    }>(),
    { errors: () => ({}) }
);
</script>

<template>
    <div class="min-h-screen bg-white font-sans antialiased dark:bg-zinc-950">
        <NavigationMenu />
        <HeroSection />

        <PageSection
            id="about"
            shaded
        >
            <AboutMeSection />
        </PageSection>

        <PageSection id="projects">
            <ProjectsSection :projects="homePage.projects" />
        </PageSection>

        <PageSection
            id="experience"
            shaded
        >
            <MyExperienceSection :timeline="homePage.timeline" />
        </PageSection>

        <PageSection id="contact">
            <ContactMeSection />
        </PageSection>

        <Footer />
    </div>
</template>
