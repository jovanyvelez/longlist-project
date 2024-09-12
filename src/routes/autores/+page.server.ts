import { db } from "$lib/server/database";
import {  autores } from "$lib/server/database/schema.js";
import { LibsqlError } from '@libsql/client';
import { eq } from "drizzle-orm";


export const load = async () => {

    const escritores = await db.select( {
        id: autores.id, 
        nombre: autores.nombre, 
        nacido: autores.nacimiento, 
        pais: autores.pais 
    } )
        .from(autores)

    return { escritores };
}



export const actions = {
    borrar: async ({ request }) => {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);
        console.log(data);
        try {
            await db.delete(autores).where(eq(autores.id, data.id));
        } catch (error) {
            if (error instanceof LibsqlError) {
                console.log(JSON.stringify(error, null, 2));
            }
        }


    }
}

