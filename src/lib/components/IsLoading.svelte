<script>
    let { isLoading } = $props();

</script>


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