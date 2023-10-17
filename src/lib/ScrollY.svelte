<script lang="ts">
	import { onMount } from 'svelte';

	export let value: number;

	let el: HTMLDivElement;

	const update = () => (value = el.getBoundingClientRect().y + window.scrollY);

	onMount(update);
</script>

<svelte:window on:resize={update} />
<div bind:this={el} />
