import { db } from '$lib/server/database/client';
import { autores } from '$lib/server/database/data';
import { count } from 'drizzle-orm';
import { LibsqlError } from '@libsql/client';
import { eq } from 'drizzle-orm';


export async function load({params}){

	const registros = await db.select({value: count()}).from(autores);

	const page = parseInt(params.pag)*10-10;

	const escritores = await db
		.select({
			id: autores.id,
			nombre: autores.nombre,
			nacido: autores.nacimiento,
			pais: autores.pais
		})
		.from(autores).limit(10).offset(page);
	
	const pagi = parseInt(params.pag);
	return { escritores, registros:registros[0], pagi};
}



export const actions = {

	borrar: async ({ request }) => {

		const formData = await request.formData();
		const data = Object.fromEntries(formData);
		let id = String((data.id))

		try {
			await db.delete(autores).where( eq( autores.id, parseInt(id)) ) ;

		} catch (error) {

			if (error instanceof LibsqlError) {
				console.log(JSON.stringify(error, null, 2));
			}

		}
	}

};
