import axios from 'axios';
import { hostName, mock_dev } from './host';

import cookie from 'cookie';
import { dev } from '$app/env';

export const handle = async ({ event, resolve }) => {
	if (event.url.pathname === '/api/auth') {
		const response = await resolve(event, {
			ssr: false
		});

		return response;
	}

	if (event.request.url.startsWith(`${event.url.origin}/api2`)) {
		const cookies = event.request.headers.get('cookie');
		const headers = new Headers(event.request.headers);
		const serialized_headers = Object.fromEntries(headers.entries());
		const new_url = hostName + event.url.pathname.replace('/api2', '');
		if (!mock_dev || !dev) {
			serialized_headers.host = 'test12312312356415616.store';
		}
		if (cookies) {
			const token = cookie.parse(cookies).access_token;

			if (!mock_dev || !dev) {
				serialized_headers.host = 'test12312312356415616.store';
			}

			if (token) {
				const new_request = new Request(new_url, {
					...event.request,
					headers: {
						...serialized_headers
					}
				});

				const response = await fetch(new_request);

				return response;
			}
		} else {
			const new_request = new Request(new_url, {
				...event.request,
				headers: {
					...serialized_headers
				}
			});

			const response = await fetch(new_request);

			return response;
		}

		const response = await resolve(event, {
			ssr: false
		});
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
