<template>
    <div>
        <h2 class="text-3xl varela mb-8 text-gray-500">My Experience</h2>
        <div class="timeline-container">
            <div class="timeline">
                <vue-timeline-update
                    v-for="event in timeline"
                    :key="event.id"
                    :date="new Date(event.to)"
                    :title="event.name"
                    :description="event.description"
                    :category="event.title"
                    :icon="event.icon"
                    color="black"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        timeline: {
            type: Array,
            default: () => ([])
        }
    }
}
</script>
