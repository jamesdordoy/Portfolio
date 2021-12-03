<template>
    <div>
        <span id="about" class="jd-bookmark"> </span>
        <h2
            class="text-3xl text-center varela mb-8 text-gray-400"
            :class="`text-${$store.getters.primaryThemeTextColour}`"
        >
            About Me
        </h2>
        <p
            class="about-me"
            :class="`text-${$store.getters.primaryThemeTextColour}`"
        >
            Hey, my name is James and im a Software Enginer living in Essex. I
            have been developing software for over eight years now and i have a
            large range of experience from creating simple Android applications
            and Microsoft Excel dashboards to working on large scale CMS and CRM
            systems.
        </p>
        <br />
        <p
            class="about-me"
            :class="`text-${$store.getters.primaryThemeTextColour}`"
        >
            Since leaving University, i have mainly been working with PHP &amp;
            Laravel. I also have a solid background in JavaScript &amp; Java but
            picking up a difference langauge isn't a problem. I am profitiant at
            writting procedual, object orianted and functional code which
            provides many different techniques for making my work cleaner. I am
            currently picking up TypeScript and enjoying the benifits as it
            enables me to write stricter code to overcome some of the
            limitations that JavaScript present such as Type Inference.
        </p>
        <div class="flex justify-center items-center py-6">
            <img
                src="/images/me.jpeg"
                alt="James Dordoy - Me"
                class="rounded-full"
            />
        </div>
        <p
            class="about-me"
            :class="`text-${$store.getters.primaryThemeTextColour}`"
        >
            I am a huge Snooker fan and also enjoying playing competitive First
            Person Shooter games. I also like learning about hardware and
            electronics and would love to pick up more basics to create simple
            robots. I have always wanted to learn to play a musical instrument
            or make YouTube tutorials based on my programming knowledge but have
            never got around to it.
        </p>
    </div>
</template>
