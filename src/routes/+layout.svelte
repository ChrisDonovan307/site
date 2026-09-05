<script>
  import './layout.css';
  // import favicon from '$lib/assets/favicon.svg';
  import Nav from '$lib/Navbar.svelte';
  import Footer from '$lib/Footer.svelte';
  import '@fortawesome/fontawesome-free/css/all.min.css';
  import '@fontsource-variable/lora';
  // This is a node module? Don't have code here
  import Toc from 'svelte-toc';

  let { children } = $props();
</script>

<!-- <svelte:head><link rel="icon" href={favicon} /></svelte:head> -->

<div class="flex min-h-screen flex-col">
  <Nav />

  <div class="page mx-auto flex w-full max-w-7xl flex-1 gap-6 px-4 py-6 sm:px-6 lg:px-8">
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

<style>
  .page {
    font-family: var(--font-serif);
    background-color: var(--background);
    background-image:
      linear-gradient(
        to bottom,
        var(--background) 0%,
        color-mix(in srgb, var(--background) 96%, transparent) 10%,
        color-mix(in srgb, var(--background) 93%, transparent) 50%
      ),
      linear-gradient(
        to right,
        var(--background) 0%,
        transparent 15%,
        transparent 80%,
        var(--background) 100%
      ),
      url('/images/pct.jpg');
    background-repeat: no-repeat;
    background-position: 25% 0%;
  }
</style>
