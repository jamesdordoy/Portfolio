<script lang="ts" setup>
defineProps<{
    clip: App.Dto.GameClip;
}>();
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
