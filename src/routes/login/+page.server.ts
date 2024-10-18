import { uploadImage } from '$lib/server/cloudinary';

export const actions = {
	crearUsuario: async ({ request }) => {
		const data = Object.fromEntries(await request.formData());
		uploadImage(data.send_image);
		return;
	}
};
