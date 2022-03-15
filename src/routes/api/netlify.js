import cookie from 'cookie';
const sites = {
	maliview: 'fcb9fd0d-f5e3-4f5c-b09c-2b72b8d502b3',
	aviator: '2eb5fcae-19a4-42c6-a21d-9a5aa03d2b1d'
};
export async function post({ request }) {
	// `params.id` comes from [id].js
	const getCookie = request.headers.get('cookie');
	if (getCookie) {
		const currentCollection = cookie.parse(getCookie);
		const collection = currentCollection.collection;
		const site_id = sites[collection];

		await fetch(`https://api.netlify.com/api/v1/sites/${site_id}/builds`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${import.meta.env.VITE_NETLIFY_TOKEN}`
			}
		});

		return {
			status: 200
		};
	}

	return {
		status: 403
	};
}
