<script>
	// Aquí podrías agregar lógica para manejar el formulario si es necesario
</script>

<div class="bg-gray-100 min-h-screen flex flex-col">
	<!-- Header -->
	<header class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
		<div class="container mx-auto text-center">
			<h1 class="text-4xl font-bold mb-2">Agregar Nuevo Autor</h1>
			<p class="text-lg">Completa el formulario para añadir un nuevo autor.</p>
		</div>
	</header>

	<!-- Main Content -->
	<main class="container mx-auto p-4 flex-1">
		<div class="bg-white p-6 rounded-lg shadow-lg">
			<form method="POST" action="?/crear" class="space-y-4">
				<!-- Nombre -->
				<div>
					<label for="nombre" class="block text-gray-700 text-sm font-medium mb-2">Nombre</label>
					<input
						id="nombre"
						name="nombre"
						type="text"
						placeholder="Nombre completo del autor"
						class="input input-bordered w-full"
					/>
				</div>

				<!-- País -->
				<div>
					<label for="pais" class="block text-gray-700 text-sm font-medium mb-2">País</label>
					<input
						id="pais"
						name="pais"
						type="text"
						placeholder="País de origen"
						class="input input-bordered w-full"
					/>
				</div>

				<!-- Fecha de Nacimiento -->
				<div>
					<label for="nacimiento" class="block text-gray-700 text-sm font-medium mb-2"
						>Fecha de Nacimiento</label
					>
					<input
						id="nacimiento"
						name="nacimiento"
						type="number"
						placeholder="Año de nacimiento"
						class="input input-bordered w-full"
					/>
				</div>

				<!-- Botones -->
				<div class="flex justify-between">
					<button type="submit" class="btn btn-primary bg-blue-600 hover:bg-blue-700 md:w-auto">
						Guardar Autor
					</button>
					<button type="button" class="btn btn-secondary bg-gray-600 hover:bg-gray-700 md:w-auto">
						Cancelar
					</button>
				</div>
			</form>
		</div>
	</main>

	<!-- Footer -->
	<footer class="bg-gray-800 text-white py-4">
		<div class="container mx-auto text-center">
			<p>&copy; 2024 Gestión de Bibliotecas. Todos los derechos reservados.</p>
		</div>
	</footer>
</div>
