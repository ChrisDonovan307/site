<!-- src/lib/Header.svelte -->
<script lang="ts">
  import { page } from '$app/state';
  import { resolve } from '$app/paths';

  function navClass(path: string) {
    return page.url.pathname === path ? 'text-brand-green' : '';
  }

  let onCats = $derived(page.url.pathname.startsWith('/cats'));
</script>

<header class="bg-background-alt text-foreground-alt">
  <nav class="max-w-8xl container mx-auto flex justify-between py-4 text-lg">
    <ul class="flex items-baseline gap-6">
      <li>
        <a
          href={onCats ? resolve(`/cats`) : resolve(`/`)}
          class="text-2xl font-semibold hover:text-current">Chris Donovan</a
        >
      </li>
      {#if !onCats}
        <li><a href={resolve(`/`)} class={navClass('/')}>Home</a></li>
        <li><a href={resolve(`/cv`)} class={navClass('/cv')}>CV</a></li>
      {/if}
    </ul>

    <ul class="flex items-center gap-6">
      <li>
        <a href="https://www.github.com/ChrisDonovan307" target="_blank" aria-label="GitHub">
          <i class="fa-brands fa-github text-2xl"></i>
        </a>
      </li>
    </ul>
  </nav>
</header>
