<script>
	let { data } = $props();
	const { libros } = data;
	let selectedCell = $state(null);

	function handleClick(cellId) {
	    selectedCell = null
		selectedCell = cellId;
		//selectedCell = selectedCell === cellId ? null : cellId;
	}
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
	{#each libros as libro (libro.id)}
		<button
			class="bordered border-2 border-cyan-200"
			class:expanded={selectedCell === libro.id}
			onclick={() => handleClick(libro.id)}
		>
			{libro.titulo}
			{#if selectedCell === libro.id}
				<div>
					<p><strong>ID:</strong> {libro.id}</p>
					<p><strong>ISBN:</strong> {libro.isbn}</p>
					<p><strong>Editorial ID:</strong> {libro.editorialId}</p>
					<p><strong>Formato:</strong> {libro.format}</p>
					<p><strong>Páginas:</strong> {libro.pages}</p>
					<p><strong>Publicado:</strong> {libro.publicado}</p>
					<p><strong>Año:</strong> {libro.year}</p>
				</div>
			{/if}
		</button>
	{/each}
</div>

<style>
	.expanded {
		grid-row: span 3;
	}
</style>
