<script lang="ts">
  import type { PageData } from './$types';
  import SocialIcons from '$lib/SocialIcons.svelte';
  import * as Card from '$lib/components/ui/card/index.js';

  let { data }: { data: PageData } = $props();
</script>

<h2>Home</h2>

<div class="mb-4 flex flex-col md:items-center gap-4 px-4 sm:flex-row items-center">
  <img
    src="images/face_slim.jpg"
    alt="face"
    class="w-7/8 shrink-0 border border-black md:w-3/8 md:max-w-1/1"
  />
  <div class="flex w-full flex-col justify-center text-justify md:text-left gap-4">
    <p>{@html data.bio}</p>
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
            <div class="flex flex-col md:flex-row items-center gap-4">
              {#if image}
                <img class="card-image" src="images/{image}" alt="alt-text" />
              {/if}
              <div class="card-text">{@html content}</div>
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
    vertical-align: auto;
  }
  .project-card :global(.card-text p:last-child) {
    margin-bottom: 0;
  }
  .project-card :global([data-slot='card']:hover) {
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
  /* mobile first: full-width image on top of the stacked card */
  .project-card :global(.card-image) {
    width: 100%;
    max-height: 150px;
    object-fit: scale-down;
  }
  /* md and up: small thumbnail beside the text */
  @media (min-width: 768px) {
    .project-card :global(.card-image) {
      width: auto;
      max-height: 100px;
    }
  }
</style>
