import cookie from 'cookie';
export async function get({ request }) {
	// `params.id` comes from [id].js
	const item = true;

	const getCookie = request.headers.get('cookie');

	if (getCookie) {
		const currentCollection = cookie.parse(getCookie).collection;

		if (currentCollection) {
			return {
				body: { collection: currentCollection }
			};
		}
	} else {
		return {
			status: 403
		};
	}
}
export async function post({ request }) {
	// `params.id` comes from [id].js

	const data = await request.json();

	const collection = data.collection;

	if (!collection) {
		return {
			status: 500
		};
	}
	const new_cookie = cookie.serialize('collection', collection, {
		path: '/',
		sameSite: 'none',
		secure: true
	});

	return {
		headers: {
			'set-cookie': [new_cookie]
		},
		body: JSON.stringify({
			collection: data.collection
		})
	};
}
