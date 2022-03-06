import prettier from 'prettier';
export default function (plop) {
	// create your generators here

	plop.setGenerator('store', {
		prompts: [
			{
				type: 'input',
				name: 'store',
				message: 'store name'
			}
		],
		actions: [
			{
				type: 'add',
				path: 'src/lib/stores/{{store}}-store.js',
				templateFile: './svelte-file-templates/store.svelte.hbs',
				force: true,
				transform: (x) => {
					// return prettier.format(x, {
					// 	parser: 'babel'
					// });
					return x;
				}
			}
		]
	});
	plop.setGenerator('svelte', {
		prompts: [
			{
				type: 'input',
				name: 'folderName',
				message: 'folder name'
			}
		],
		actions: [
			{
				type: 'add',
				path: 'src/lib/{{folderName}}/{{folderName}}.svelte',
				templateFile: './svelte-file-templates/model.svelte.hbs',
				force: true,
				transform: (x) => {
					// return prettier.format(x, {
					// 	parser: 'babel'
					// });
					return x;
				}
			}
		]
	});
}
