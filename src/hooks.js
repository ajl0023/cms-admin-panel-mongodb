import cookie from 'cookie';
import { v4 as uuid } from '@lukeed/uuid';
import axios from 'axios';
import { hostName } from './host';

export const handle = async ({ event, resolve }) => {
	//request.clone

	if (event.request.url.startsWith('http://localhost:3002/api2')) {
		const new_request = new Request(
			event.request.url.replace('http://localhost:3002/api2', hostName),
			event.request
		);

		// const request_body = await event.request.json();
		const response = await fetch(new_request);
		console.log(response);
		return response;
	}
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');

	event.locals.userid = cookies.userid || uuid();
	event.locals.test = cookies.collection;

	//hopefully we can just do something like starts with apiv2 or something and catch the routes here
	//not sure if thats ok?
	//catch routes so we can sort of use svelte kit as a gateway or something like that

	const response = await resolve(event, {
		ssr: false
	});

	return response;
};
export function getSession(event) {}
export async function externalFetch(request) {}
