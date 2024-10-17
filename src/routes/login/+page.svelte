
<h1 class="center">Demostracíon de Forms Sveltekit</h1>

<form action="?/colectData" method="post">
	<label for="email">Excribe tu email</label>
	<input type="email" name="email" autocomplete="off" required />

	<label for="password" class="space">Excribe tu contraseña</label>
	<input type="password" name="password" required />

	<button type="submit">Enviar datos</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		max-width: 50%;
		margin: auto auto;
		border: 1px solid #ccc;
		padding: 5rem;
		background-color: #f4f4f4;
		border-radius: 10px;
	}

	input {
		border: 2px solid grey;
		padding: 0.5rem;
		box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
		margin: 0.3rem 0;
		border-radius: 5px;
		color: #5a5a5a;
		font-size: 1.3rem;
	}

	button {
		background-color: #f4f4f4;
		color: #333;
		padding: 0.5rem 1rem;
		border: solid 1px #333;
		border-radius: 5px;
		margin-top: 1rem;
		cursor: pointer;
		margin: 0 auto;
		margin-top: 1rem;
	}

	button:hover {
		background-color: white;
		font-weight: bold;
	}

	.space {
		margin: 1rem 0 0;
	}
	.center {
		margin: 0 auto;
		max-width: 50%;
		text-align: center;
		margin-top: 5rem;
	}
</style>