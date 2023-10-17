<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	let sectionEl: HTMLElement;

	const activeSectionEl = getContext<Writable<HTMLElement>>('SplitScroller.activeSectionEl');
</script>

<section bind:this={sectionEl}>
	<div class="scrollable-content">
		<slot name="scrollable" />
	</div>
	{#if $activeSectionEl === sectionEl}
		<div class="fixed-content">
			<slot name="fixed" />
		</div>
	{/if}
</section>

<style>
	.scrollable-content {
		@apply w-[50%] relative;
	}
	.fixed-content {
		@apply fixed top-0 right-0 w-[50%] flex h-screen;
	}
</style>
