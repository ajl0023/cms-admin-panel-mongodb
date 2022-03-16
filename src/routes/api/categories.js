import cookie from 'cookie';
import { externalFetch } from 'src/hooks';
import { hostName } from 'src/host';
export async function get({ request }) {
	// `params.id` comes from [id].js

	const item = true;

	const categories = await fetch(new Request(`${hostName}/api/categories`, request));

	if (categories.status === 200) {
		const data = await categories.json();
		const getCookie = request.headers.get('cookie');

		if (getCookie) {
			const currentCollection = cookie.parse(getCookie);
			if (item) {
				return {
					body: { categories: data }
				};
			}
		}
	}
	return {
		status: 403
	};
}
