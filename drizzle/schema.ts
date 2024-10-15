import { sqliteTable, integer, text, foreignKey } from "drizzle-orm/sqlite-core"


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

export const session = sqliteTable("session", {
	id: text().primaryKey().notNull(),
	userId: text("user_id").notNull().references(() => user.id),
	expiresAt: integer("expires_at").notNull(),
});

export const user = sqliteTable("user", {
	id: text().primaryKey().notNull(),
	email: text().notNull(),
	password: text().notNull(),
});