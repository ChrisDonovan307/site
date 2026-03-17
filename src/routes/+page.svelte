<script lang="ts">
	import type { PageData } from './$types';
	import SocialIcons from "$lib/SocialIcons.svelte"

	let { data }: { data: PageData } = $props();

</script>

<h2>Home</h2>

<div class="grid grid-cols-12 gap-4 mb-4 px-4">
	<div class="col-span-4">
		<img src="images/face.JPG" alt="face" class="border border-black">
	</div>
	<div class="col-span-8 flex flex-col justify-center gap-4">
		<p class="px-4">{@html data.bio}</p>
		<SocialIcons socials={data.socials} />
	</div>
</div>

<h2>Projects</h2>


{#each data.projects as { group, items }}
	<h3>{group}</h3>
	{#each items as { title, content, link }}
		{#if items.length > 1}
			<h4>{title}</h4>
		{/if}
		<ul class="list-disc pl-5 mb-4">
			<li>{@html content}</li>
			<li>{@html link}</li>
		</ul>
	{/each}
{/each}

<style>
	h2 {
		font-size: 2rem;
		font-weight: 700;
		margin-bottom: 1rem;
	}
	h3 {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}
	h4 {
		font-size: 1.25rem;
		font-weight: 500;
		margin-bottom: 1rem;
	}
</style>
