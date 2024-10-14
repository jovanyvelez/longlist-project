<script lang="ts">
	import { goto } from '$app/navigation';

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

<div class="shadow-lg bg-white flex-1 m-2">
	<div class="p-6">
		<h2 class="text-xl font-bold text-blue-600">{title}</h2>
		<p class="text-gray-600 mt-2">{description}</p>
        <div class="flex justify-center">
            <button class="btn btn-primary mt-4 mx-auto" onclick={() => ir(route)}>{buttonText}</button>
        </div>
	</div>
</div>

{#if isLoading}
	<div class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
		<div class="bg-white p-4 rounded shadow-lg">
			<p class="text-lg font-bold">Cargando</p>
			<p class="flex justify-center items-center">
				
				<span class="loading loading-ring loading-sm" style="background-color: yellow;"></span>
				<span class="loading loading-ring loading-md" style="background-color: blue;"></span>
                <span class="loading loading-ring loading-lg" style="background-color: red;"></span>
			</p>
		</div>
	</div>
{/if}
