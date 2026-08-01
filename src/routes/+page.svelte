<script lang="ts">
  import type { PageData } from './$types';
  import SocialIcons from '$lib/SocialIcons.svelte';
  import * as Card from '$lib/components/ui/card/index.js';

  let { data }: { data: PageData } = $props();
</script>

<h2>Home</h2>

<div class="mb-4 grid grid-cols-12 gap-4 px-4">
  <div class="col-span-4">
    <img src="images/face_slim.jpg" alt="face" class="border border-black" />
  </div>
  <div class="col-span-8 flex flex-col justify-center gap-4">
    <p class="px-4">{@html data.bio}</p>
    <SocialIcons socials={data.socials} />
  </div>
</div>

<h2>Projects</h2>

<div class="project-card">
  {#each data.projects as { group, items }}
    <h3>{group}</h3>
    {#each items as { content, link, image }}
      <a href={link} target="_blank">
        <Card.Root class="mb-3 rounded-lg border border-black bg-card-background">
          <Card.Content>
            <div class="flex flex-row items-center gap-4">
              {#if image}
                <img class="card-image" src="images/{image}" alt="alt-text" />
              {/if}
              <p>{@html content}</p>
            </div>
          </Card.Content>
        </Card.Root>
      </a>
    {/each}
  {/each}
</div>

<style>
  .project-card :global([data-slot='card']) {
    transition: box-shadow 0.3s ease-in-out;
    transition: transform 0.2s ease-in-out;
    margin: 1rem;
    padding: 1rem;
    cursor: pointer;
    max-height: 200px;
  }
  .project-card :global([data-slot='card']:hover) {
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
  .project-card :global(.card-image) {
    max-height: 100px;
  }
</style>
