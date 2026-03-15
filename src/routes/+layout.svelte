<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Nav from "$lib/Navbar.svelte";
	// import Toc from "$lib/TableOfContents.svelte";
	import '@fortawesome/fontawesome-free/css/all.min.css'
	import "@fontsource-variable/lora";
  	import Toc from 'svelte-toc'

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Nav />

<div class="flex gap-6 px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
	<main class="flex-1">
		{@render children()}
	</main>
	<Toc
		title="On This Page"
		--toc-width="15rem"
		--toc-li-color="var(--color-foreground)"
		--toc-li-hover-color="var(--color-brand-purple)"
		--toc-li-hover-bg="transparent"
		--toc-active-color="var(--color-brand-green"
	/>
</div>