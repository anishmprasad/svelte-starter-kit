<script>
	import Link from './Link.svelte';
	import Route from './Route.svelte';
	
</script>

<!-- Navigation goes here -->
<Link page={{path: '/', name: 'Home'}} />
<Link page={{path: '/about', name: 'About'}} />

<!-- Main container goes here -->
<Route />

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>