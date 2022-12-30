export default {
	npmClient: 'yarn',
	apiRoute: {
		platform: 'vercel'
	},
	routes: [
		{ path: '/', component: 'index' },
		{ path: '/components', component: "@/pages/Components" },
	],
};
