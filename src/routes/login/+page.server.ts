export function load() {
	return {};
}

export const actions = {

	colectData: async ({ request }: { request: Request }) => {
		const data = Object.fromEntries(await request.formData());
		console.log(data);
	}
};
