<script context="module">
	export async function load({ fetch, stuff, session }) {
		// if (browser) {
		// 	return {
		// 		props: {
		// 			test: 3
		// 		}
		// 	};
		// } else {
		// const collection = await fetch('/data');
		// }
		const categories = await fetch('/api/categories');
		return {};
	}
</script>

<div>sdfsdfsdfsdfsdfsd</div>
