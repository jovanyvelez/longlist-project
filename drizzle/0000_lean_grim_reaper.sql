-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `autores` (
	`id` integer PRIMARY KEY,
	`nombre` text,
	`pais` text,
	`nacimiento` integer
);
--> statement-breakpoint
CREATE TABLE `escritos` (
	`autor_id` integer,
	`libro_id` integer,
	FOREIGN KEY (`libro_id`) REFERENCES `libros`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`autor_id`) REFERENCES `autores`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `libros` (
	`id` integer PRIMARY KEY,
	`isbn` text,
	`titulo` text,
	`editorial_id` integer,
	`format` text,
	`pages` integer,
	`publicado` text,
	`year` integer,
	FOREIGN KEY (`editorial_id`) REFERENCES `editores`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `editores` (
	`id` integer PRIMARY KEY,
	`editorial` text
);
--> statement-breakpoint
CREATE TABLE `calificaciones` (
	`book_id` integer,
	`calificacion` integer,
	FOREIGN KEY (`book_id`) REFERENCES `libros`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `traductores` (
	`id` integer PRIMARY KEY,
	`nombre` text
);
--> statement-breakpoint
CREATE TABLE `traducidos` (
	`traductor_id` integer,
	`libro_id` integer,
	FOREIGN KEY (`libro_id`) REFERENCES `libros`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`traductor_id`) REFERENCES `traductores`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `usuarios` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`nombre` text NOT NULL,
	`email` text NOT NULL,
	`rol` text NOT NULL,
	`contrasena` text NOT NULL,
	`edad` numeric
);
--> statement-breakpoint
CREATE TABLE `__drizzle_migrations` (

);

*/