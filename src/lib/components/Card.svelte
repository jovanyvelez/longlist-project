<script lang="ts">
	import { goto } from '$app/navigation';
	import IsLoading from './IsLoading.svelte';

	type parameters = {
		title: string;
		description: string;
		buttonText: string;
		route: string;
	};

	let { title, description, buttonText, route }: parameters = $props();

	let isLoading = $state(false);

	function ir(route: string) {
		isLoading = true;
		goto(route);
	}
</script>

<div class="shadow-lg bg-white flex-1 m-2 rounded-lg">
	<div class="p-6">
		<h2 class="text-xl font-bold text-blue-600">{title}</h2>
		<p class="text-gray-600 mt-2">{description}</p>
        <div class="flex justify-center">
            <button class="btn btn-primary mt-4 mx-auto" onclick={() => ir(route)}>{buttonText}</button>
        </div>
	</div>
</div>

<IsLoading {isLoading} />