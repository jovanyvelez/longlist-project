<script lang="ts">
    let { seccion, texto } = $props();
</script>

<header class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
	<div class="container mx-auto text-center">
		<h1 class="text-4xl font-bold mb-2">{seccion}</h1>
		<p class="text-lg">{texto}</p>
	</div>
</header>
