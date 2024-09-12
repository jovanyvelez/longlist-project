import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"
import { relations } from "drizzle-orm/relations";


export const autores = sqliteTable("autores", {
	id: integer("id").primaryKey(),
	nombre: text("nombre").unique(),
	pais: text("pais"),
	nacimiento: integer("nacimiento"),
  });
  
  export const autoresRelations = relations(autores, ({ many }) => ({
	escritos: many(escritos),
  }));
  
  export const escritos = sqliteTable("escritos", {
	autorId: integer("autor_id").references(() => autores.id),
	libroId: integer("libro_id").references(() => libros.id),
  });
  
  export const escritosRelations = relations(escritos, ({ one }) => ({
	libro: one(libros, {
	  fields: [escritos.libroId],
	  references: [libros.id]
	}),
	autor: one(autores, {
	  fields: [escritos.autorId],
	  references: [autores.id]
	}),
  }));
  
  export const libros = sqliteTable("libros", {
	id: integer("id").primaryKey(),
	isbn: text("isbn"),
	titulo: text("titulo"),
	editorialId: integer("editorial_id").references(() => editores.id),
	formato: text("formato"),
	paginas: integer("paginas"),
	publicado: text("publicado"),
	anio: integer("anio"),
  });
  
  export const librosRelations = relations(libros, ({ one, many }) => ({
	escritos: many(escritos),
	editorial: one(editores, {
	  fields: [libros.editorialId],
	  references: [editores.id]
	}),
	calificaciones: many(calificaciones),
	traducidos: many(traducidos),
  }));
  
  export const editores = sqliteTable("editores", {
	id: integer("id").primaryKey(),
	editorial: text("editorial"),
  });
  
  export const editoresRelations = relations(editores, ({ many }) => ({
	libros: many(libros),
  }));
  
  export const calificaciones = sqliteTable("calificaciones", {
	libroId: integer("book_id").references(() => libros.id),
	calificacion: integer("calificacion"),
  });
  
  export const calificacionesRelations = relations(calificaciones, ({ one }) => ({
	libro: one(libros, {
	  fields: [calificaciones.libroId],
	  references: [libros.id]
	}),
  }));
  
  export const traductores = sqliteTable("traductores", {
	id: integer("id").primaryKey(),
	nombre: text("nombre"),
  });
  
  export const traductoresRelations = relations(traductores, ({ many }) => ({
	traducidos: many(traducidos)
  }));
  
  export const traducidos = sqliteTable("traducidos", {
	traductorId: integer("traductor_id").references(() => traductores.id),
	libroId: integer("libro_id").references(() => libros.id),
  });

export const traducidosRelations = relations(traducidos, ({ one }) => ({
	libro: one(libros, {
		fields: [traducidos.libroId],
		references: [libros.id]
	}),
	traductor: one(traductores, {
		fields: [traducidos.traductorId],
		references: [traductores.id]
	}),
}));


