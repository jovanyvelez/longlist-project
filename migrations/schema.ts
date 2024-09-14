import { sqliteTable, AnySQLiteColumn, integer, text, foreignKey } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const autores = sqliteTable("autores", {
	id: integer("id").primaryKey(),
	nombre: text("nombre"),
	pais: text("pais"),
	nacimiento: integer("nacimiento"),
});

export const escritos = sqliteTable("escritos", {
	autorId: integer("autor_id").references(() => autores.id),
	libroId: integer("libro_id").references(() => libros.id),
});

export const libros = sqliteTable("libros", {
	id: integer("id").primaryKey(),
	isbn: text("isbn"),
	titulo: text("titulo"),
	editorialId: integer("editorial_id").references(() => editores.id),
	format: text("format"),
	pages: integer("pages"),
	publicado: text("publicado"),
	year: integer("year"),
});

export const editores = sqliteTable("editores", {
	id: integer("id").primaryKey(),
	editorial: text("editorial"),
});

export const calificaciones = sqliteTable("calificaciones", {
	bookId: integer("book_id").references(() => libros.id),
	calificacion: integer("calificacion"),
});

export const traductores = sqliteTable("traductores", {
	id: integer("id").primaryKey(),
	nombre: text("nombre"),
});

export const traducidos = sqliteTable("traducidos", {
	traductorId: integer("traductor_id").references(() => traductores.id),
	libroId: integer("libro_id").references(() => libros.id),
});

export const session = sqliteTable("session", {
	id: text("id").primaryKey().notNull(),
	userId: text("user_id").notNull().references(() => user.id),
	expiresAt: integer("expires_at").notNull(),
});

export const user = sqliteTable("user", {
	id: text("id").primaryKey().notNull(),
	email: text("email").notNull(),
	password: text("password").notNull(),
});