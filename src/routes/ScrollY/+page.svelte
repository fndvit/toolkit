<script lang="ts">
	import ScrollY from '$lib/ScrollY.svelte';

	let value1: number;
	let value2: number;
</script>

<div class="max-w-4xl m-auto p-10 pt-20 box-content">
	<h1 class="font-mono">{'<ScrollY />'}</h1>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec euismod, nisl
		eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Donec
		euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae
		nisl. Donec euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam nisl
		nunc vitae nisl. Donec euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae
		aliquam nisl nunc vitae nisl. Donec euismod, nisl eget ultricies ultricies, nunc nisl aliquam
		nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget ultricies ultricies, nunc
		nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl.
	</p>
	<div class="border-t my-4">
		<ScrollY bind:value={value1} />
		<p>↑ {value1}px</p>
	</div>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec euismod, nisl
		eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Donec
		euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae
		nisl. Donec euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam nisl
		nunc vitae nisl. Donec euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae
		aliquam nisl nunc vitae nisl. Donec euismod, nisl eget ultricies ultricies, nunc nisl aliquam
		nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget ultricies ultricies, nunc
		nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl.
	</p>
	<div class="border-t my-4">
		<ScrollY bind:value={value2} />
		<p>↑ {value2}px</p>
	</div>
</div>

<style>
	h1 {
		@apply font-mono text-2xl mb-4;
	}
</style>
