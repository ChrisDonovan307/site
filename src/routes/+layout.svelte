<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
  	// import { P, Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
	import Nav from "$lib/Navbar.svelte";
	import Toc from "$lib/TableOfContents.svelte";

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Nav />

<div class="flex gap-6 p-6 max-w-6xl mx-auto">
	<aside class="shrink-0">
		<Toc />
	</aside>
	<main class="flex-1">
		{@render children()}
	</main>
</div>
