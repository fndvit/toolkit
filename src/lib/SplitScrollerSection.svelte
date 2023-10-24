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
	{#if $$slots.fixed && sectionEl && $activeSectionEl === sectionEl}
		<div class="fixed-content">
			<slot name="fixed" />
		</div>
	{:else if $$slots.sticky}
		<div class="sticky-container">
			<div class="sticky-content">
				<slot name="sticky" />
			</div>
		</div>
	{/if}
</section>

<style>
	section {
		position: relative;
	}
	.scrollable-content {
		position: relative;
		width: 50%;
	}
	.sticky-content {
		position: sticky;
		top: 0;
		height: 100vh;
	}
	.sticky-container {
		position: absolute;
		top: 0;
		right: 0;
		width: 50%;
		height: 100%;
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
