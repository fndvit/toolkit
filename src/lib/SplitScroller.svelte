<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import ScrollProgress from './ScrollProgress.svelte';
	import { writable } from 'svelte/store';

	let index: number;

	let sectionEl: HTMLElement;

	const activeSectionEl = writable<HTMLElement>();

	$: activeSectionEl.set(sectionEl);

	setContext('SplitScroller.activeSectionEl', activeSectionEl);

	onMount(() => {});
</script>

<ScrollProgress bind:index bind:sectionEl>
	<slot />
</ScrollProgress>
