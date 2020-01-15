<script>
  import { onDestroy } from 'svelte';
  let seconds = 0;
  const interval = setInterval(() => {
    seconds = seconds + 1;
  }, 1000) 
  onDestroy(() => {
    clearInterval(interval);
  })
</script>


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
    h1 {
		color: purple;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
<main>
<h1>This is Home page</h1>
<p>It's been running for {seconds} seconds</p>
</main>