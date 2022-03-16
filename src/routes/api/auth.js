import { session } from '$app/stores';
import cookie from 'cookie';
import { hostName } from 'src/host';

export async function post({ request }) {
	const new_request = new Request(hostName + '/auth/login', request);

	const res = await fetch(new_request);

	if (res.status === 200) {
		const res_body = await res.json();

		const token = res_body.session_id;
		const new_cookie = cookie.serialize('access_token', token, {
			path: '/'
		});

		return {
			headers: {
				'set-cookie': [new_cookie]
			}
		};
	}
	return {
		status: 403
	};
}
