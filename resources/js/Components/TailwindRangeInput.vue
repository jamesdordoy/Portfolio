<template>
	<input
		:value="value"
		:class="`bg-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade}`"
		class="rounded-lg overflow-hidden appearance-none h-3 w-full outline-none"
		type="range"
		min="100"
		max="900"
		step="100"
		@input="onInput"
	/>
</template>

<script>
export default {
	data() {
		return {
			value: this.$store.getters.primaryThemeColourShade,
		};
	},
	methods: {
		onInput(event) {
			this.value = event.target.value;
		},
	},
};
</script>
