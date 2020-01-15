import Home from './page/Home.svelte';
import About from './page/About.svelte';

export default [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component: About
	}
];
