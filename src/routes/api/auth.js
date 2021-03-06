import { session } from '$app/stores';
import cookie from 'cookie';
import { hostName } from 'src/host';

export async function post({ request, session }) {
	const body = await request.json();

	if (body.session_id) {
		const new_cookie = cookie.serialize('access_token', body.session_id, {
			path: '/',
			httpOnly: false,
			secure: true,
			sameSite: 'none'
		});
		return {
			headers: {
				'set-cookie': [new_cookie]
			}
		};
	} else {
		return {
			status: 403
		};
	}
}
