<template>
    <!-- <Timeline
        :timeline-items="getTimeline"
        :message-when-no-items="messageWhenNoItems"
        :unique-year="uniqueYear"
        :order="order"
    /> -->
</template>

<style>
.timeline {
    max-width: none !important;
    color: #b8c2cc;
    max-height: 520px;
    overflow: scroll;
}

.section-year {
    width: 70px !important;
}

.timeline-item {
    padding-right: 20px;
}

.item {
    border-left: 5px solid #b8c2cc !important;
}

.dot {
    background: #4dc0b5 !important;
}

</style>

<script>

// import Timeline from 'timeline-vuejs';
// import '../../../node_modules/timeline-vuejs/dist/timeline-vuejs.css';

export default {
    components: {
        // Timeline,
    },
    data() {
        return {
            timeline: [],
        };
    },
    computed: {
        getTimeline() {
            let timeline = [];

            this.items.forEach(item => {
                let from = moment(item.from);
                let date = new Date(from.format("Y"), from.format("M") - 1);

                timeline.push({
                    from: date,
                    title: item.title,
                    description: item.description,
                });
            });

            return timeline;
        }
    },
    props: {
        items: {
            type: Array,
            default: () => ([]),
        },
        order: {
            type: String,
            default: 'desc',
        },
        messageWhenNoItems: {
            type: String,
            default: 'Nothing found',
        },
        uniqueYear: {
            type: Boolean,
            default: true,
        }
    }
}
</script>