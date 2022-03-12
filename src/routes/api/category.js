import { hostName } from 'src/host';

export async function get({ request, url }) {
	// `params.id` comes from [id].js

	// const item = true;
	const category = url.searchParams.get('category');

	const get_category = await fetch(new Request(`${hostName}/api/${category}`, request));

	const data = await get_category.json();

	{
		return {
			body: data
		};
	}

	return {
		status: 403
	};
}
