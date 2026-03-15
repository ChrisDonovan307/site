<script lang="ts">
	let { data } = $props();
 	import { Button } from "$lib/components/ui/button/index.js";
</script>

<h1 class="text-2xl font-bold mb-4">Home</h1>

<p>Here is the content</p>

<ul class="list-disc pl-5">
	{#each data.projects as { title, _, link }}
		<li><a href="{link}" class="text-blue-500 underline hover:text-blue-900" target="_blank">{title}</a></li>
	{/each}
</ul>

<p>Here is a button</p>

<Button>Click me</Button>
