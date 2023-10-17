<script lang="ts">
	import ScrollProgress from '$lib/ScrollProgress.svelte';

	let index: number;
	let progress: number;
	let sectionEl: HTMLElement;
</script>

<div class="fixed top-10 grid grid-cols-2 gap-x-4 p-4 border left-2">
	<span>progress</span> <span>{progress?.toFixed(2)} </span>
	<span>index</span> <span>{index}</span>
	<span>sectionEl</span> <span>{sectionEl?.querySelector('h2')?.textContent}</span>
</div>
<div class="max-w-xl m-auto p-10 pt-20 box-content">
	<h1 class="font-mono text-xl mb-4">{'<ScrollProgress />'}</h1>

	<div class="fixed top-0 -translate-x-full -ml-3 border-t border-black">progress top ↑</div>
	<div class="fixed bottom-0 -translate-x-full -ml-3 border-b border-black">progress bottom ↓</div>
	<div class="fixed top-[50%] -translate-x-full -ml-3">index →</div>

	<ScrollProgress bind:index bind:progress bind:sectionEl>
		<div class="relative">
			<div class="absolute left-full top-0 border-t border-black w-max">↑ Content start</div>
		</div>
		<section class="py-4 border-2 p-2">
			<h2 class="text-lg mb-2">Section 1</h2>
			<p class="my-10">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec euismod, nisl
				eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Donec
				euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc
				vitae nisl. Donec euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae
				aliquam nisl nunc vitae nisl. Donec euismod, nisl eget ultricies ultricies, nunc nisl
				aliquam nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget ultricies
				ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl
				eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl.
			</p>
			<p class="my-10">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec euismod, nisl
				eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Donec
				euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc
				vitae nisl. Donec euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae
				aliquam nisl nunc vitae nisl. Donec euismod, nisl eget ultricies ultricies, nunc nisl
				aliquam nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget ultricies
				ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl
				eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl.
			</p>
		</section>
		<section class="py-4 border-2 p-2 mt-1">
			<h2 class="text-lg mb-2">Section 2</h2>
			<p class="my-10">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec euismod, nisl
				eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Donec
				euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc
				vitae nisl. Donec euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae
				aliquam nisl nunc vitae nisl. Donec euismod, nisl eget ultricies ultricies, nunc nisl
				aliquam nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget ultricies
				ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl
				eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl.
			</p>
			<p class="my-10">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec euismod, nisl
				eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Donec
				euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc
				vitae nisl. Donec euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae
				aliquam nisl nunc vitae nisl. Donec euismod, nisl eget ultricies ultricies, nunc nisl
				aliquam nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget ultricies
				ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl
				eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl.
			</p>
			<p class="my-10">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec euismod, nisl
				eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Donec
				euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc
				vitae nisl. Donec euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae
				aliquam nisl nunc vitae nisl. Donec euismod, nisl eget ultricies ultricies, nunc nisl
				aliquam nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget ultricies
				ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl
				eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl.
			</p>
		</section>
		<section class="py-4 border-2 p-2 mt-1">
			<h2 class="text-lg mb-2">Section 3</h2>
			<p class="my-10">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec euismod, nisl
				eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Donec
				euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc
				vitae nisl. Donec euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae
				aliquam nisl nunc vitae nisl. Donec euismod, nisl eget ultricies ultricies, nunc nisl
				aliquam nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget ultricies
				ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl
				eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl.
			</p>
			<p class="my-10">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec euismod, nisl
				eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Donec
				euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc
				vitae nisl. Donec euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae
				aliquam nisl nunc vitae nisl. Donec euismod, nisl eget ultricies ultricies, nunc nisl
				aliquam nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget ultricies
				ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl
				eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl.
			</p>
		</section>
		<div class="relative">
			<div class="absolute left-full top-0 border-b border-black w-max -translate-y-full">
				↓ Content end
			</div>
		</div>
	</ScrollProgress>
</div>
