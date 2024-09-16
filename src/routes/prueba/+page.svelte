<script>
	let libros = [
		{ id: 1, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', year: 1967 },
		{ id: 2, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', year: 1605 },
		{ id: 3, titulo: '1984', autor: 'George Orwell', year: 1949 },
		{ id: 4, titulo: 'Matar a un ruiseñor', autor: 'Harper Lee', year: 1960 },
		{ id: 5, titulo: 'El gran Gatsby', autor: 'F. Scott Fitzgerald', year: 1925 },
		{ id: 6, titulo: 'En busca del tiempo perdido', autor: 'Marcel Proust', year: 1913 },
		{ id: 7, titulo: 'Ulises', autor: 'James Joyce', year: 1922 },
		{ id: 8, titulo: 'La Odisea', autor: 'Homero', year: -800 },
		{ id: 9, titulo: 'Crimen y castigo', autor: 'Fiódor Dostoyevski', year: 1866 },
		{ id: 10, titulo: 'La Metamorfosis', autor: 'Franz Kafka', year: 1915 },
		{ id: 11, titulo: 'Orgullo y prejuicio', autor: 'Jane Austen', year: 1813 },
		{ id: 12, titulo: 'El retrato de Dorian Gray', autor: 'Oscar Wilde', year: 1890 },
		{ id: 13, titulo: 'Fahrenheit 451', autor: 'Ray Bradbury', year: 1953 },
		{ id: 14, titulo: 'El proceso', autor: 'Franz Kafka', year: 1925 },
		{ id: 15, titulo: 'El extranjero', autor: 'Albert Camus', year: 1942 },
		{ id: 16, titulo: 'El señor de los anillos', autor: 'J.R.R. Tolkien', year: 1954 },
		{ id: 17, titulo: 'El guardián entre el centeno', autor: 'J.D. Salinger', year: 1951 },
		{ id: 18, titulo: 'La divina comedia', autor: 'Dante Alighieri', year: 1320 },
		{ id: 19, titulo: 'El nombre de la rosa', autor: 'Umberto Eco', year: 1980 },
		{ id: 20, titulo: 'Los miserables', autor: 'Victor Hugo', year: 1862 }
	];

	let selectedCell = $state(null);

	function handleClick(cellId) {
		selectedCell = selectedCell === cellId ? null : cellId;
	}
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
	{#each libros as libro (libro.id)}
		<div class="flex flex-col items-center">
			<button class:expanded={selectedCell === libro.id} onclick={() => handleClick(libro.id)}>
				<p class="bordered border-2">{libro.titulo}</p>
			</button>
			{#if selectedCell === libro.id}
				<p>
					{libro.autor} ({libro.year})
				</p>
			{/if}
		</div>
	{/each}
</div>

<style>
	.expanded {
		grid-row: span 2;
	}
</style>
