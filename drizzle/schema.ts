import { sqliteTable, AnySQLiteColumn, integer, text, foreignKey, numeric } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const autores = sqliteTable("autores", {
	id: integer().primaryKey(),
	nombre: text(),
	pais: text(),
	nacimiento: integer(),
});

export const escritos = sqliteTable("escritos", {
	autorId: integer("autor_id").references(() => autores.id),
	libroId: integer("libro_id").references(() => libros.id),
});

export const libros = sqliteTable("libros", {
	id: integer().primaryKey(),
	isbn: text(),
	titulo: text(),
	editorialId: integer("editorial_id").references(() => editores.id),
	format: text(),
	pages: integer(),
	publicado: text(),
	year: integer(),
});

export const editores = sqliteTable("editores", {
	id: integer().primaryKey(),
	editorial: text(),
});

export const calificaciones = sqliteTable("calificaciones", {
	bookId: integer("book_id").references(() => libros.id),
	calificacion: integer(),
});

export const traductores = sqliteTable("traductores", {
	id: integer().primaryKey(),
	nombre: text(),
});

export const traducidos = sqliteTable("traducidos", {
	traductorId: integer("traductor_id").references(() => traductores.id),
	libroId: integer("libro_id").references(() => libros.id),
});

export const usuarios = sqliteTable("usuarios", {
	id: integer().primaryKey({ autoIncrement: true }),
	nombre: text().notNull(),
	email: text().notNull(),
	rol: text().notNull(),
	contrasena: text().notNull(),
	edad: numeric(),
});

export const drizzleMigrations = sqliteTable("__drizzle_migrations", {
});

