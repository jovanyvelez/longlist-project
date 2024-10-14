<script>
	import { goto } from '$app/navigation';
	let { data } = $props();
	let { escritores } = data;

</script>


<div class="bg-gray-100 min-h-screen flex flex-col">
	<!-- Header -->
	<header class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
		<div class="container mx-auto text-center">
			<h1 class="text-4xl font-bold mb-2">Gestión de Autores</h1>
			<p class="text-lg">Administra y visualiza la información de los autores.</p>
		</div>
	</header>

	<!-- Main Content -->
	<main class="container mx-auto p-4 flex-1">
		<!-- Search Bar -->
		<div class="mb-8">
			<div class="flex flex-col md:flex-row items-center justify-between">
				<input
					type="text"
					placeholder="Buscar por nombre, país o fecha de nacimiento..."
					class="input input-bordered w-full md:w-1/3 mb-4 md:mb-0"
				/>
				<button class="btn btn-primary bg-green-600 hover:bg-green-700">Buscar</button>
			</div>
		</div>

		<!-- Add Author Button -->
		<div class="mb-8 text-center">
			<button
				class="btn btn-primary bg-blue-600 hover:bg-blue-700"
				onclick={() => goto('/autores/crear')}>Agregar Autor</button
			>
		</div>

		
		<!-- Authors List -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<!-- Example Author Card 1 -->
			{#if data.escritores.length > 0}
				{#each data.escritores as autor (autor.id)}
					<div class="card shadow-lg bg-white transform transition-transform hover:scale-105">
						<div class="card-body p-6">
							<h2 class="card-title text-xl font-bold text-blue-600">{autor.nombre}</h2>
							<p class="text-gray-700 mt-2">
								País: <span class="font-semibold">{autor.pais}</span>
							</p>
							<p class="text-gray-700">
								Nacimiento: <span class="font-semibold">{autor.nacido}</span>
							</p>
							<div class="mt-4 flex space-x-2">
								<button class="btn btn-secondary bg-yellow-600 hover:bg-yellow-700"
									>Ver Libros</button
								>
								<button class="btn btn-primary bg-blue-600 hover:bg-blue-700">Editar</button>
								<form action="?/borrar" method="POST">
									<input type="hidden" name="id" value={autor.id}>
									<button formaction="?/borrar" class="btn btn-danger bg-red-600 hover:bg-red-700">Eliminar</button>
								</form>
							</div>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</main>

	<!-- Footer -->
	<footer class="bg-gray-800 text-white py-4">
		<div class="container mx-auto text-center">
			<p>&copy; 2024 Gestión de Bibliotecas. Todos los derechos reservados.</p>
		</div>
	</footer>
</div>
