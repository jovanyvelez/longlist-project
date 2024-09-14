<script>
	import { enhance } from '$app/forms';
	let { form } = $props();
</script>

{#if form?.message}
	<p>{form?.message}</p>
{/if}

<div class="container">
	<div class="card">
		<h1>Sign in</h1>
		<form method="post" action="?/login" use:enhance>
			<div class="form-control">
				<label for="email">Email</label>
				<input type="text" name="email" id="username" />
			</div>
			<div class="form-control">
				<label for="password">Password</label>
				<input type="password" name="password" id="password" />
			</div>
			<div class="form-control">
				<button type="submit">Continue</button>
			</div>
		</form>
	</div>
</div>

<style>
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		background-color: #f3f4f6; /* bg-gray-100 */
	}

	.card {
		width: 24rem; /* w-96 */
		background-color: #ffffff; /* bg-white */
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* shadow-xl */
		border-radius: 0.5rem; /* rounded-lg */
		padding: 2rem; /* p-8 */
	}

	.card h1 {
		font-size: 1.5rem; /* text-2xl */
		font-weight: bold; /* font-bold */
		margin-bottom: 1rem; /* mb-4 */
	}

	.form-control {
		margin-bottom: 1rem; /* mb-4 */
	}

	.form-control label {
		display: block;
		margin-bottom: 0.5rem; /* mb-2 */
		font-weight: 500; /* font-medium */
	}

	.form-control input {
		width: 100%; /* w-full */
		padding: 0.5rem; /* p-2 */
		border: 1px solid #d1d5db; /* border-gray-300 */
		border-radius: 0.375rem; /* rounded-md */
		font-size: 1rem; /* text-base */
	}

	.form-control input:focus {
		outline: none;
		border-color: #3b82f6; /* border-blue-500 */
		box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3); /* focus:ring */
	}

	.form-control button {
		width: 100%; /* w-full */
		padding: 0.75rem; /* py-3 */
		background-color: #3b82f6; /* bg-blue-500 */
		color: #ffffff; /* text-white */
		border: none;
		border-radius: 0.375rem; /* rounded-md */
		font-size: 1rem; /* text-base */
		font-weight: 500; /* font-medium */
		cursor: pointer;
	}

	.form-control button:hover {
		background-color: #2563eb; /* bg-blue-600 */
	}
</style>
