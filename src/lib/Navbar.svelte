<!-- src/lib/Header.svelte -->
<script lang="ts">
  import { page } from '$app/state';

  function navClass(path: string) {
    return page.url.pathname === path ? 'font-semibold' : '';
  }
</script>

<header>
  <nav class="container ml-3 py-3 flex items-center justify-between">
    <a href="/" class="text-xl font-bold">My Site</a>

    <ul class="flex gap-6">
      <li>
        <a href="/" class={navClass('/')}>Home</a>
      </li>
      <li>
        <a href="/about" class={navClass('/about')}>About</a>
      </li>
    </ul>
  </nav>
</header>

<style>
  header {
    background-color: var(--color-olive-600);
    margin-bottom: 1rem;
    /* height: 100px; */
  }
  a {
    color: bisque;
  }
  a:hover {
    color: #344937;
    font-weight: bold;
  }
</style>
