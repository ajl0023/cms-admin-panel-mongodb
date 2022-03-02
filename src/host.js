import { dev } from '$app/env';
let host;
if (dev) {
	host = 'http://localhost:3000';
} else {
	host = 'http://147.182.193.194';
}
export const hostName = host;
