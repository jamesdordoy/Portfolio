<template>
    <button :class="classes" title="Update" @click="click(data)">
        <span>
            <i class="fa fa-eye" aria-hidden="true"></i>
        </span>
        &nbsp;
        {{ name }}
    </button>
</template>

<script>
export default {
    props: {
        data: {},
        name: {},
        click: {},
        classes: {},
    },
};
</script>
