<script lang="ts" setup>
import { PropType } from 'vue';

defineProps({
    clip: {
        type: Object as PropType<App.Dto.GameClip>,
        required: true,
    },
});
</script>

<template>
    <iframe
        class="game"
        :src="clip.url"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
    ></iframe>
</template>
