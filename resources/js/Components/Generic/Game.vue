<script lang="ts" setup>
import { useStore } from 'vuex';
import { PropType } from 'vue';

const store = useStore();

defineProps({
    clip: {
        type: Object as PropType<App.Models.Data.GameClip>,
        required: true,
    },
});
</script>

<template>
    <iframe
        class="min-h-96 h-96 w-full"
        :src="clip.url"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
    ></iframe>
</template>
