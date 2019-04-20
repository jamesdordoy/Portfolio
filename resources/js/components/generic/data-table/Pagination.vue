<template>
    <nav class="pagination" v-if="!client">
        <hr class="bg-white">
        <outline-button v-if="links.prev" @click="$emit('prev');">
            Prev
        </outline-button>
        <outline-button v-else :disabled="true" @click="$emit('prev');">
            Prev
        </outline-button>

        <span class="text-white">{{ pagination.from }} - {{ pagination.to }} of {{ pagination.total }}</span>

        <outline-button v-if="links.next" @click="$emit('next');">
            Next
        </outline-button>
        <outline-button v-else :disabled="true">
            Next
        </outline-button>
    </nav>
</template>

<script>
    export default {
        props: {
            pagination: {
                default: () => ({

                })
            },
            links: {
                default: () => ({

                })
            },
            client: {

            }, 
            filtered: {

            }
        }
    }
</script>