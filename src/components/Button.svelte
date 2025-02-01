<script lang="ts">
	import { cva } from 'class-variance-authority';
	import type { Snippet } from 'svelte';

    let { variant, onClick, children }: { variant: 'default' | 'outline', onClick: () => void, children: Snippet } = $props();

	const buttonVariants = cva('inline-flex items-center justify-center rounded-md p-3 text-white', {
		variants: {
			variant: {
				default: 'bg-blue-500 hover:bg-blue-600',
				outline: 'bg-transparent border-2 border-blue-500 hover:bg-blue-500 hover:text-white'
			}
		}
	});
</script>

<button class={buttonVariants({ variant })} onclick={onClick}>
	{@render children()}
</button>
