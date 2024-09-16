import { db } from '$lib/server/database/client';
import type { RequestHandler } from '@sveltejs/kit';
import { libros } from '$lib/server/database/data';

export const load = async ({ request }) => {
	const libros = await db.query.libros.findMany();
	console.log(libros);
	return {
		libros
	};
};
