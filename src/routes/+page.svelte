<script>
	import { goto } from '$app/navigation';
	import { createCounter } from '$lib/store.svelte';

	const counter = createCounter();

	// Aquí podrías agregar lógica si es necesario
</script>

41 0div class="bg-gray-100 min-h-screen flex flex-col">
<!-- Header -->
<header class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
	<div class="container mx-auto text-center">
		<h1 class="text-5xl font-bold mb-2">Gestión de Bibliotecas</h1>
		<p class="text-lg">Administra tu biblioteca con facilidad y estilo</p>
	</div>
</header>

<!-- Main Content -->
<main class="container mx-auto p-4 flex-1">
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		<!-- Card 1: Autores -->
		<div class="card shadow-lg bg-white transform transition-transform hover:scale-105">
			<div class="card-body p-6">
				<h2 class="card-title text-xl font-bold text-blue-600">Autores</h2>
				<p class="text-gray-700 mt-2">Gestiona y visualiza la información sobre autores.</p>
				<button
					class="btn btn-primary mt-4 bg-blue-600 hover:bg-blue-700 text-white"
					onclick={() => goto('/autores')}>Ver Autores</button
				>
			</div>
		</div>

		<!-- Card 2: Libros -->
		<div class="card shadow-lg bg-white transform transition-transform hover:scale-105">
			<div class="card-body p-6">
				<h2 class="card-title text-xl font-bold text-blue-600">Libros</h2>
				<p class="text-gray-700 mt-2">Gestiona y visualiza tu colección de libros.</p>
				<button class="btn btn-primary mt-4 bg-blue-600 hover:bg-blue-700 text-white"
					>Ver Libros</button
				>
			</div>
		</div>

		<!-- Card 3: Editoriales -->
		<div class="card shadow-lg bg-white transform transition-transform hover:scale-105">
			<div class="card-body p-6">
				<h2 class="card-title text-xl font-bold text-blue-600">Editoriales</h2>
				<p class="text-gray-700 mt-2">Gestiona y visualiza la información sobre editoriales.</p>
				<button class="btn btn-primary mt-4 bg-blue-600 hover:bg-blue-700 text-white"
					>Ver Editoriales</button
				>
			</div>
		</div>

		<!-- Card 4: Calificaciones -->
		<div class="card shadow-lg bg-white transform transition-transform hover:scale-105">
			<div class="card-body p-6">
				<h2 class="card-title text-xl font-bold text-blue-600">Calificaciones</h2>
				<p class="text-gray-700 mt-2">Gestiona y visualiza las calificaciones de los libros.</p>
				<button class="btn btn-primary mt-4 bg-blue-600 hover:bg-blue-700 text-white"
					>Ver Calificaciones</button
				>
			</div>
		</div>

		<!-- Card 5: Traductores -->
		<div class="card shadow-lg bg-white transform transition-transform hover:scale-105">
			<div class="card-body p-6">
				<h2 class="card-title text-xl font-bold text-blue-600">Traductores</h2>
				<p class="text-gray-700 mt-2">Gestiona y visualiza la información sobre traductores.</p>
				<button class="btn btn-primary mt-4 bg-blue-600 hover:bg-blue-700 text-white"
					>Ver Traductores</button
				>
			</div>
		</div>

		<!-- Card 6: Traducciones -->
		<div class="card shadow-lg bg-white transform transition-transform hover:scale-105">
			<div class="card-body p-6">
				<h2 class="card-title text-xl font-bold text-blue-600">Traducciones</h2>
				<p class="text-gray-700 mt-2">Gestiona y visualiza las traducciones de libros.</p>
				<button class="btn btn-primary mt-4 bg-blue-600 hover:bg-blue-700 text-white"
					>Ver Traducciones</button
				>
			</div>
		</div>
	</div>
</main>

<!-- Footer -->
<footer class="bg-gray-800 text-white py-4">
	<div class="container mx-auto text-center">
		<p>&copy; 2024 Gestión de Bibliotecas. Todos los derechos reservados.</p>
	</div>
</footer>
