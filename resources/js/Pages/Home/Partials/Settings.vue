<template>
	<div>
		<div class="flex flex-wrap px-3 py-2">
			<div class="w-4/6">
				<h2
					class="text-xl"
					:class="`text-${$store.getters.primaryThemeTextColour}`"
				>
					Theme Settings
				</h2>
			</div>
			<div class="w-2/6">
				<button
					:class="`text-${$store.getters.primaryThemeTextColour}`"
					class="float-right mt-1"
					@click="showSettings"
				>
					<font-awesome-icon :icon="['fas', 'times']" />
				</button>
			</div>
		</div>
		<hr class="my-1" />
		<div class="flex flex-wrap px-3 py-2">
			<div class="w-full">
				<h3
					class="text-lg mb-2"
					:class="`text-${$store.getters.primaryThemeTextColour}`"
				>
					Theme Mode
				</h3>
			</div>
			<div class="w-full">
				<div class="block relative">
					<select
						v-model="$store.getters.primaryTheme"
						class="block appearance-none w-full px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
						:class="`bg-${$store.getters.primaryThemeBgLighter} text-${$store.getters.primaryThemeTextColour} focus:bg-${$store.getters.primaryThemeBgDarkest}`"
						@change="updateTheme"
					>
						<option value="light">Light</option>
						<option value="dark">Dark</option>
					</select>
				</div>
				<hr class="my-2" />
			</div>
			<div class="w-full">
				<h3
					class="text-lg mb-2"
					:class="`text-${$store.getters.primaryThemeTextColour}`"
				>
					Theme Colour
				</h3>
			</div>
			<div class="w-full">
				<div class="flex flex-wrap">
					<div class="w-1/6 p-1">
						<colour-button
							colour="blue"
							@click="updatePrimaryThemeColour('blue')"
						>
						</colour-button>
					</div>
					<div class="w-1/6 p-1">
						<colour-button
							colour="teal"
							@click="updatePrimaryThemeColour('teal')"
						>
						</colour-button>
					</div>
					<div class="w-1/6 p-1">
						<colour-button
							colour="purple"
							@click="updatePrimaryThemeColour('purple')"
						>
						</colour-button>
					</div>
					<div class="w-1/6 p-1">
						<colour-button
							colour="green"
							@click="updatePrimaryThemeColour('green')"
						>
						</colour-button>
					</div>
					<div class="w-1/6 p-1">
						<colour-button
							colour="red"
							@click="updatePrimaryThemeColour('red')"
						>
						</colour-button>
					</div>
					<div class="w-1/6 p-1">
						<colour-button
							colour="orange"
							@click="updatePrimaryThemeColour('orange')"
						>
						</colour-button>
					</div>
					<div class="w-1/6 p-1">
						<colour-button
							colour="yellow"
							@click="updatePrimaryThemeColour('yellow')"
						>
						</colour-button>
					</div>
					<div class="w-1/6 p-1">
						<colour-button
							colour="indigo"
							@click="updatePrimaryThemeColour('indigo')"
						>
						</colour-button>
					</div>
					<div class="w-1/6 p-1">
						<colour-button
							colour="pink"
							@click="updatePrimaryThemeColour('pink')"
						>
						</colour-button>
					</div>
					<div class="w-1/6 p-1">
						<colour-button
							colour="lime"
							@click="updatePrimaryThemeColour('lime')"
						>
						</colour-button>
					</div>
					<div class="w-1/6 p-1">
						<colour-button
							colour="sky"
							@click="updatePrimaryThemeColour('sky')"
						>
						</colour-button>
					</div>
					<div class="w-1/6 p-1">
						<colour-button
							colour="emerald"
							@click="updatePrimaryThemeColour('emerald')"
						>
						</colour-button>
					</div>
					<div class="w-1/6 p-1">
						<colour-button
							colour="stone"
							@click="updatePrimaryThemeColour('stone')"
						>
						</colour-button>
					</div>
					<div class="w-1/6 p-1">
						<colour-button
							colour="zinc"
							@click="updatePrimaryThemeColour('zinc')"
						>
						</colour-button>
					</div>
					<div class="w-1/6 p-1">
						<colour-button
							colour="slate"
							@click="updatePrimaryThemeColour('slate')"
						>
						</colour-button>
					</div>
				</div>
				<hr class="my-2" />
				<div class="w-full">
					<h3
						class="text-lg mb-2"
						:class="`text-${$store.getters.primaryThemeTextColour}`"
					>
						Theme Colour Shade
					</h3>
				</div>
				<div class="w-full">
					<div class="block relative">
						<tailwind-range-input
							@input="updatePrimaryThemeColourShade"
						>
						</tailwind-range-input>
					</div>
					<hr class="my-2" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ColourButton from '@/Components/ColourButton.vue';
import TailwindRangeInput from '@/Components/TailwindRangeInput.vue';

export default {
	components: {
		ColourButton,
		TailwindRangeInput,
	},
	props: {
		hidden: {
			type: Boolean,
			default: true,
		},
	},
	computed: {
		getTheme() {
			return this.$store.getters.primaryTheme;
		},
	},
	methods: {
		showSettings() {
			this.$emit('toggle', false);
		},
		updatePrimaryThemeColour(colour) {
			this.$store.commit('setPrimaryThemeColor', colour);
		},
		updatePrimaryThemeColourShade(event) {
			this.$store.commit('setPrimaryThemeColorShade', event.target.value);
		},
		updateTheme(event) {
			this.$store.commit('setPrimaryTheme', event.target.value);
		},
		updateThemeRouterAnimation(event) {
			this.$store.commit(
				'setPrimaryThemeRouterAnimation',
				event.target.value
			);
		},
	},
};
</script>
