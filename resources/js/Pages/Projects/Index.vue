<template>
	<app-layout title="Languages">
		<template #header>
			<div class="flex justify-between">
				<h2 class="font-semibold text-xl text-gray-800 leading-tight">
					Projects
				</h2>
				<JetstreamButton :href="route('languages.create')">
					Create new Project
				</JetstreamButton>
			</div>
		</template>

		<div class="py-12">
			<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
				<div class="overflow-hidden shadow-xl">
					<Table :resource="projects">
						<template #head>
							<tr>
								<th @click.prevent="sortBy('id')">ID</th>
								<th @click.prevent="sortBy('name')">Name</th>
								<th @click.prevent="sortBy('description')">
									Description
								</th>
								<th></th>
							</tr>
						</template>

						<template #body>
							<tr
								v-for="project in projects.data"
								:key="project.id"
							>
								<td>{{ project.id }}</td>
								<td>{{ project.name }}</td>
								<td>{{ project.description }}</td>
								<td class="flex justify-end">
									<JetstreamButton classes="mr-2">
										Edit
									</JetstreamButton>
									<JetstreamDangerButton
										>Delete</JetstreamDangerButton
									>
								</td>
							</tr>
						</template>
					</Table>
				</div>
			</div>
		</div>
	</app-layout>
</template>

<script>
import { defineComponent } from 'vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import JetstreamButton from '@/Jetstream/Button.vue';
import JetstreamDangerButton from '@/Jetstream/DangerButton.vue';
import { Table } from '@protonemedia/inertiajs-tables-laravel-query-builder';

export default defineComponent({
	components: {
		AppLayout,
		Table,
		JetstreamButton,
		JetstreamDangerButton,
	},
	props: {
		projects: Object,
	},
});
</script>
