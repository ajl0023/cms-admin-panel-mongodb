import { dev } from '$app/env';
let host;
let dev2 = dev;
if (dev2) {
	host = 'http://localhost:8080';
} else {
	host = 'https://test12312312356415616.store';
}
export const mock_dev = dev2;
export const hostName = host;
export const host_prod = 'test12312312356415616.store';
