<script>
	let { data } = $props();
	const { libros } = data;
</script>

{#each libros as libro (libro.id)}
	<div class="collapse">
		<input type="checkbox" />
		<div class="collapse-title text-xl font-medium">
			{libro.titulo}
		</div>
		<div class="collapse-content">
			<p><strong>ID:</strong> {libro.id}</p>
			<p><strong>ISBN:</strong> {libro.isbn}</p>
			<p><strong>Editorial ID:</strong> {libro.editorialId}</p>
			<p><strong>Formato:</strong> {libro.format}</p>
			<p><strong>Páginas:</strong> {libro.pages}</p>
			<p><strong>Publicado:</strong> {libro.publicado}</p>
			<p><strong>Año:</strong> {libro.year}</p>
		</div>
	</div>
{/each}
