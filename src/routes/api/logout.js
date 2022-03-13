import cookie from 'cookie';
export async function post({ request }) {
	// `params.id` comes from [id].js
	const new_cookie = cookie.serialize('collection', null, {
		path: '/',
		maxAge: 0
	});

	return {
		headers: {
			'set-cookie': [new_cookie]
		}
	};
}
