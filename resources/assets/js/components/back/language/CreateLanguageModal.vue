<template>
    <back-modal :show="show" @close="close">
      <h1 slot="header">Add a Language</h1>
      <div slot="body">
        
      </div>
      <span slot="footer"></span>
    </back-modal>
</template>

<script>
"use strict";

export default {
    props: {
        show: {
            type: Boolean,
            default: () => (false)
        },
        size: {
            type: String,
            default: () => ('medium')
        },
    },
    methods: {
        close() {
            this.$emit("close");
        }
    }
}
</script>
