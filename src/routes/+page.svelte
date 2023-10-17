<script lang="ts">
	const components = ['ScrollProgress', 'ScrollY', 'SplitScroller'];
</script>

<div class="max-w-xl m-auto mt-20">
	<h1 class="text-2xl mb-10">@fndvit/toolkit</h1>

	<ul class="flex gap-y-4 flex-col">
		{#each components as component}
			<li>
				<a href={component} class="hover:text-gray-600">&lt;{component} /&gt;</a>
			</li>
		{/each}
	</ul>
</div>
