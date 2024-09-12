<script>
    let libros = [
      { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", disponible: true, prestatario: null, fechaPrestamo: null },
      { id: 2, titulo: "El principito", autor: "Antoine de Saint-Exupéry", disponible: false, prestatario: "Ana García", fechaPrestamo: "2023-05-15" },
      { id: 3, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", disponible: true, prestatario: null, fechaPrestamo: null },
    ];
  
    function manejarAgregarLibro() {
      alert("Funcionalidad para agregar libro pendiente de implementar");
    }
  
    function manejarPrestarLibro(id) {
      const libro = libros.find(l => l.id === id);
      if (libro && libro.disponible) {
        libro.disponible = false;
        libro.prestatario = prompt("Nombre del estudiante:");
        libro.fechaPrestamo = new Date().toISOString().split('T')[0];
        libros = [...libros]; // Forzar actualización de Svelte
      }
    }
  
    function manejarDevolverLibro(id) {
      const libro = libros.find(l => l.id === id);
      if (libro && !libro.disponible) {
        libro.disponible = true;
        libro.prestatario = null;
        libro.fechaPrestamo = null;
        libros = [...libros]; // Forzar actualización de Svelte
      }
    }
  
    function manejarEliminarLibro(id) {
      if (confirm("¿Estás seguro de que quieres eliminar este libro?")) {
        libros = libros.filter(libro => libro.id !== id);
      }
    }
  </script>
  
  <main>
    <header>
      <h1>Sistema de Préstamos - Biblioteca Escolar</h1>
    </header>
  
    <section>
      <h2>Inventario de Libros</h2>
      <button on:click={manejarAgregarLibro}>Agregar Nuevo Libro</button>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Estado</th>
            <th>Prestatario</th>
            <th>Fecha de Préstamo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {#each libros as libro (libro.id)}
            <tr>
              <td>{libro.titulo}</td>
              <td>{libro.autor}</td>
              <td>{libro.disponible ? 'Disponible' : 'Prestado'}</td>
              <td>{libro.prestatario || '-'}</td>
              <td>{libro.fechaPrestamo || '-'}</td>
              <td>
                {#if libro.disponible}
                  <button on:click={() => manejarPrestarLibro(libro.id)}>Prestar</button>
                {:else}
                  <button on:click={() => manejarDevolverLibro(libro.id)}>Devolver</button>
                {/if}
                <button on:click={() => manejarEliminarLibro(libro.id)}>Eliminar</button>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </section>
  </main>
  
  <style>
    main {
      font-family: Arial, sans-serif;
      max-width: 1000px;
      margin: 0 auto;
      padding: 20px;
    }
  
    header {
      background-color: #2c3e50;
      color: white;
      padding: 15px;
      text-align: center;
      border-radius: 5px;
    }
  
    h1 {
      margin: 0;
    }
  
    section {
      margin-top: 20px;
    }
  
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }
  
    th, td {
      border: 1px solid #ddd;
      padding: 12px;
      text-align: left;
    }
  
    th {
      background-color: #f2f2f2;
      font-weight: bold;
    }
  
    button {
      background-color: #3498db;
      border: none;
      color: white;
      padding: 10px 15px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 14px;
      margin: 2px 2px;
      cursor: pointer;
      border-radius: 4px;
      transition: background-color 0.3s;
    }
  
    button:hover {
      background-color: #2980b9;
    }
  
    button:nth-child(2) {
      background-color: #e74c3c;
    }
  
    button:nth-child(2):hover {
      background-color: #c0392b;
    }
  </style>