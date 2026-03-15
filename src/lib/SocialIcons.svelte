<script>
	let { socials } = $props();
</script>

<div style="display: flex; justify-content: center; gap: 20px;">
    {#each socials as {link, label, image}}
        <a href="{link}" aria-label="{label}" target="_blank">
            {@html image}
        </a>
    {/each}
</div>

<style>
    div :global(i) {
        font-size: 3rem;
        transition: color 0.2s ease, transform 0.2s ease;
        color: var(--color-brand-green);
    }
    a:hover :global(i) {
        color: var(--color-brand-purple);
        transform: translateY(-3px);
    }
    .spirit {
        filter: brightness(0) saturate(100%) invert(40%) sepia(26%) saturate(695%) hue-rotate(90deg) brightness(97%) contrast(86%);
        height: 2.5rem;
        width: auto;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    .spirit:hover {
        filter: brightness(0) saturate(100%) invert(50%) sepia(7%) saturate(3064%) hue-rotate(280deg) brightness(89%) contrast(83%);
        transform: translateY(-3px);
    }
</style>
