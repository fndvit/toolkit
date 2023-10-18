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
	{#if sectionEl && $activeSectionEl === sectionEl}
		<div class="fixed-content">
			<slot name="fixed" />
		</div>
	{/if}
</section>

<style>
	.scrollable-content {
		position: relative;
		width: 50%;
	}
	.fixed-content {
		display: flex;
		position: fixed;
		top: 0;
		right: 0;
		width: 50%;
		height: 100vh;
	}
</style>
