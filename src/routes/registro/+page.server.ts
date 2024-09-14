import { lucia } from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';
import { generateIdFromEntropySize } from 'lucia';
import { hash } from '@node-rs/argon2';
import { db } from '$lib/server/database/client';
import { user } from '$lib/server/database/data';

import type { Actions } from './$types';

export const actions: Actions = {
	crear: async (event) => {
		const formData = await event.request.formData();
		//const datos = Object.fromEntries(formData);
		const email = formData.get('email');
		const password = formData.get('password');
		const confirm_password = formData.get('confirm-password');

		console.log(password);
		console.log(confirm_password);
		if (password !== confirm_password) {
			return fail(400, { message: 'Passwords do not match' });
		}

		// username must be between 4 ~ 31 characters, and only consists of lowercase letters, 0-9, -, and _
		// keep in mind some database (e.g. mysql) are case insensitive
		if (typeof email !== 'string' || email.length < 3 || email.length > 31) {
			return fail(400, {
				message: 'Invalid usernamed'
			});
		}
		if (typeof password !== 'string' || password.length < 6 || password.length > 255) {
			return fail(400, {
				message: 'Invalid password'
			});
		}

		const userId = generateIdFromEntropySize(10); // 16 characters long
		const passwordHash = await hash(password, {
			// recommended minimum parameters
			memoryCost: 19456,
			timeCost: 2,
			outputLen: 32,
			parallelism: 1
		});

		// TODO: check if username is already used
		//

		try {
			await db.insert(user).values({
				id: userId,
				email: email,
				password: passwordHash
			});
		} catch (e) {
			console.error(e);
			return fail(400, {
				message: 'Invalid username'
			});
		}

		/*await db.table('user').insert({
			id: userId,
			username: username,
			password_hash: passwordHash
			});*/

		const session = await lucia.createSession(userId, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});

		redirect(302, '/');
	}
};
