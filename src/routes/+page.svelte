<script>
    import { goto } from '$app/navigation';
    import Card from '$lib/components/Card.svelte';
    import Header from '$lib/components/Header.svelte';
</script>


<Header seccion="Gestión de Biblioteca" 
        texto="Administracion de Biblioteca" 
/>
<!-- Main Content -->
<main class="p-4 grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
    <Card 
        title="Autores" 
        description="Gestiona y visualiza la información sobre autores." 
        buttonText="Ver Autores" 
        route='/autores' 
    />
    <Card 
        title="Libros" 
        description="Gestiona y visualiza tu colección de libros." 
        buttonText="Ver Libros" 
        route='/libros'
    />
    <Card 
        title="Editoriales" 
        description="Gestiona y visualiza la información sobre editoriales." 
        buttonText="Ver Editoriales" 
        route='/test' 
    />
    <Card 
        title="Calificaciones" 
        description="Gestiona y visualiza las calificaciones de los libros." 
        buttonText="Ver Calificaciones" 
        route='/calificaciones'
    />
    <Card 
        title="Traductores" 
        description="Gestiona y visualiza la información sobre traductores." 
        buttonText="Ver Traductores" 
        route='/traductores'
    />
    <Card 
        title="Traducciones" 
        description="Gestiona y visualiza las traducciones de libros." 
        buttonText="Ver Traducciones" 
        route='/traducciones'
    />
</main>