<script lang="ts">
	import { cva } from 'class-variance-authority';
	import type { Snippet } from 'svelte';
	import { cn } from '../lib/utils';

	type buttonProps = {
		variant: 'default' | 'outline';
		children: Snippet;
		className: string;
	}

	type buttonEvents = {
		click: MouseEvent;
		keydown: KeyboardEvent;
	}

	const buttonVariants = cva('inline-flex items-center justify-center rounded-md p-3 text-white uppercase tracking-widest font-semibold text-s, px-10 py-2', {
		variants: {
			variant: {
				default: 'bg-white transform hover:scale-105 text-grayish-blue',
				outline: 'bg-transparent border-2 border-outline hover:bg-blue-500 hover:text-white'
			}
		},
		defaultVariants: {
			variant: 'default'
		}
	});

	
	let {
		variant = 'default',
		onClick = () => {},
		onKeyDown = () => {},
		children,
		class: className = ''
	} = $props<{
		variant?: 'default' | 'outline',
		onClick?: (e: MouseEvent) => void,
		onKeyDown?: (e: KeyboardEvent) => void,
		children: Snippet,
		class?: string
	}>();

	export { className as class };
</script>

<button 
class={cn(buttonVariants({ variant }), className )}
onclick={onClick}
onkeydown={onClick}
>
	{@render children()}
</button>
