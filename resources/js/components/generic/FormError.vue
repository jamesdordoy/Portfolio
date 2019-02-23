<template>
    <div class="text-left text-grey">
        <template v-if="errors.length">
            <span v-for="error in errors" :key="error">
                <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                {{ error }}
            </span>
            <br>
        </template>
    </div>
</template>

<script>
    export default {
        props: {
            errors: {
                type: Array,
                default() {
                    return [];
                }
            }
        }
    }
</script>