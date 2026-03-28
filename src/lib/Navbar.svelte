<!-- src/lib/Header.svelte -->
<script lang="ts">
  import { page } from '$app/state';
  import { resolve } from '$app/paths';

  function navClass(path: string) {
    return page.url.pathname === path ? 'text-brand-green' : '';
  }
</script>

<header class="bg-background-alt text-foreground-alt">
  <nav class="container max-w-8xl mx-auto py-4 flex justify-between text-lg">
    <ul class="flex gap-6 items-baseline">
      <li><a href="{resolve(`/`)}" class="text-2xl font-semibold hover:text-current">Chris Donovan</a></li>
      <li><a href="{resolve(`/`)}" class={navClass('/')}>Home</a></li>
      <li><a href="{resolve(`/cv`)}" class={navClass('/cv')}>CV</a></li>
    </ul>

    <ul class="flex gap-6 items-center">
      <li>
        <a href="https://www.github.com/ChrisDonovan307" target="_blank" aria-label="GitHub">
          <i class="fa-brands fa-github text-2xl"></i>
        </a>
      </li>
    </ul>
  </nav>
</header>
