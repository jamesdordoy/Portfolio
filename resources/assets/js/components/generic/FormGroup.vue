<template>
    <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" :for="forId">
            {{ title }}
        </label>
        <slot>
        </slot>
    </div>
</template>

<script>
export default {
  name: 'FormGroup',
  props: {
    title: String,
    forId: String,
  }
}
</script>
