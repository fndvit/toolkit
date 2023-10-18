<script lang="ts">
	import { onMount } from 'svelte';

	export let index = 0;
	export let progress = 0;
	export let selector = 'section';
	export let sectionEl: HTMLElement | null = null;

	let top: number;
	let height: number;
	let sections: { top: number; bottom: number; el: HTMLElement }[];

	let containerEl: HTMLDivElement;

	function onScroll() {
		progress = (window.scrollY - top) / height;
		const screenCenter = window.scrollY + window.innerHeight / 2;
		index = sections.findIndex(({ top, bottom }) => screenCenter >= top && screenCenter < bottom);
		sectionEl = sections[index]?.el;
	}

	function update() {
		// TODO: run this on resize (and maybe periodically for safety)
		const rect = containerEl.getBoundingClientRect();
		top = rect.top + window.scrollY;
		height = rect.bottom - window.innerHeight - rect.top;
		const sectionEls = [...containerEl.querySelectorAll(selector)];
		const sectionTops = sectionEls.map((sectionEl, i) =>
			i === 0 ? 0 : sectionEl.getBoundingClientRect().y + window.scrollY
		);
		const sectionBottoms = [
			...sectionTops.slice(1),
			document.body.getBoundingClientRect().bottom + window.scrollY
		];
		sections = sectionTops.map((top, i) => ({
			top,
			bottom: sectionBottoms[i],
			el: sectionEls[i] as HTMLElement
		}));
		onScroll();
	}

	onMount(() => {
		update();
	});
</script>

<svelte:window on:scroll={onScroll} />

<div bind:this={containerEl}>
	<slot />
</div>
