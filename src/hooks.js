import { hostName } from './host';

export const handle = async ({ event, resolve }) => {
	if (event.url.pathname === '/api/auth') {
		const response = await resolve(event, {
			ssr: false
		});

		return response;
	}

	const new_request = new Request(hostName + '/api/logged-in');
	new_request.headers.append('cookie', event.request.headers.get('cookie'));
	const check_status = await fetch(new_request);

	if (check_status.status === 200) {
		event.locals.user = {
			status: 'logged_in'
		};
	} else {
		event.locals.user = {
			status: 'logged_out'
		};
	}

	if (event.request.url.startsWith(`${hostName}/api2`)) {
		const new_request = new Request(
			event.request.url.replace(`${hostName}/api2`, hostName),
			event.request
		);

		// const request_body = await event.request.json();

		const response = await fetch(new_request);

		return response;
	} else {
		const response = await resolve(event, {
			ssr: false
		});

		return response;
	}
};
export async function handleError({ error, event }) {}
export function getSession(event) {
	return event.locals ? event.locals : {};
}
export async function externalFetch(request) {
	return fetch(request);
}
