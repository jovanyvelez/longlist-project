
import { autores } from '$lib/server/database/schema.js';
import { db } from "$lib/server/database";
import { LibsqlError } from '@libsql/client';
import { fail } from '@sveltejs/kit';


export async function load() {
    return {};
}


export const actions = {
    crear: async ({ request }) => {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);
        console.log(data);
        try {
            await db.insert(autores).values({
                nombre: data.nombre,
                nacimiento: data.nacimiento,
                pais: data.pais
            });
        } catch (error) {
            if (error instanceof LibsqlError) {
                console.log(error);
            }

            return fail(500, { error });
        }

        return { success: true };
    },
}

