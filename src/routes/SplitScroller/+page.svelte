<script>
	import SplitScroller from '$lib/SplitScroller.svelte';
	import SplitScrollerSection from '$lib/SplitScrollerSection.svelte';
	import { fade } from 'svelte/transition';
</script>

<SplitScroller>
	<SplitScrollerSection>
		<div slot="scrollable" class="slide bg-red-50">
			<p class="text-lg">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec euismod, nisl
				eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Donec
				euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc
				vitae nisl.
			</p>
		</div>
		<div slot="fixed" class="slide text-3xl bg-gray-100 border-4" in:fade out:fade>Fixed 1</div>
	</SplitScrollerSection>
	<SplitScrollerSection>
		<div slot="scrollable" class="slide bg-blue-50">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec euismod, nisl
				eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Donec
				euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc
				vitae nisl. Donec euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae
				aliquam nisl nunc vitae nisl. Donec euismod, nisl eget ultricies ultricies, nunc nisl
				aliquam nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget ultricies
				ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl
				eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl.
			</p>
		</div>
		<div slot="fixed" class="slide text-3xl bg-gray-600 text-white" in:fade out:fade>Fixed 2</div>
	</SplitScrollerSection>
</SplitScroller>

<style>
	.slide {
		@apply h-screen p-8 flex items-center justify-center w-full;
	}
</style>
