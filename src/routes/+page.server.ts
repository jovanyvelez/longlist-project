import { db } from '$lib/server/database';
import {
	editores,
	libros,
	autores,
	escritos,
	traductores,
	traducidos,
	calificaciones
} from '$lib/server/database/schema.js';
import { desc, eq, sql, sum, count, avg, Column } from 'drizzle-orm';

export const load = async () => {
/* 	const masVotados = await db
		.select({
			id: libros.id,
			titulo: libros.titulo,
			votos: count(calificaciones.calificacion),
			promedio: avg(calificaciones.calificacion)
		})
		.from(libros)
		.innerJoin(calificaciones, eq(libros.id, calificaciones.libroId))
		.groupBy(calificaciones.libroId)
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
	console.log(JSON.stringify(test, null, 2)); */
	return {  };
};
