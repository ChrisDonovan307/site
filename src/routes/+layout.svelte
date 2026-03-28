<script>
	import './layout.css';
	// import favicon from '$lib/assets/favicon.svg';
	import Nav from "$lib/Navbar.svelte";
	import Footer from "$lib/Footer.svelte";
	import '@fortawesome/fontawesome-free/css/all.min.css'
	import "@fontsource-variable/lora";
	// This is a node module? Don't have code here
  	import Toc from 'svelte-toc'

	let { children } = $props();
</script>

<!-- <svelte:head><link rel="icon" href={favicon} /></svelte:head> -->

<div class="min-h-screen flex flex-col">
	<Nav />

	<div class="flex gap-6 px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto w-full flex-1">
		<main class="flex-1">
			{@render children()}
		</main>
		<Toc
			title="On This Page"
			collapseSubheadings="h4"
			--toc-width="20rem"
			--toc-li-color="var(--color-foreground)"
			--toc-li-hover-color="var(--color-brand-purple)"
			--toc-li-hover-bg="transparent"
			--toc-active-color="var(--color-brand-green"
		/>
	</div>

	<Footer />
</div>
