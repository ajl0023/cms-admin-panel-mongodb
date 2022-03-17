import axios from 'axios';
import cookie from 'cookie';
import { externalFetch } from 'src/hooks';
import { hostName } from 'src/host';
export async function get({ request }) {
	// `params.id` comes from [id].js

	const item = true;

	try {
		const categories = await axios('/ap2/api/categories', {
			withCredentials: true
		});

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
	} catch (error) {
		console.log(error);
		return {
			status: error.response.status
		};
	}
}
