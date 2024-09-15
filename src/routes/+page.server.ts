//import { lucia } from '$lib/server/auth';
import { redirect } from '@sveltejs/kit';

import { db } from '$lib/server/database/client.js';
import { libros, calificaciones } from '$lib/server/database/data';
import { desc, eq, count, avg } from 'drizzle-orm';

export const load = async ({ locals }) => {
	if (!locals.user) {
		return redirect(302, '/login');
	}
	return {
		user: locals.user
	};
	const masVotados = await db
		.select({
			id: libros.id,
			titulo: libros.titulo,
			votos: count(calificaciones.calificacion),
			promedio: avg(calificaciones.calificacion)
		})
		.from(libros)
		.innerJoin(calificaciones, eq(libros.id, calificaciones.bookId))
		.groupBy(calificaciones.bookId)
		.orderBy(desc(count(calificaciones.calificacion)))
		.limit(5);

	const test = await db.query.editores.findMany({
		columns: {
			editorial: true
		},
		with: {
			libros: { titulo: true }
		}
	});
	console.log(JSON.stringify(test, null, 2));
	return { masVotados };
};
