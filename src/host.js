import { dev } from '$app/env';
let host;
if (dev) {
	host = 'http://localhost:3000';
} else {
	host = 'http://test12312312356415616.store';
}
export const hostName = host;
