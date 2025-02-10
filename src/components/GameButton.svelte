<script lang="ts">
	import { cva } from 'class-variance-authority';
	import type { Snippet } from 'svelte';
	import { cn } from '../lib/utils';

	type buttonProps = {
		variant: 'rock' | 'paper' | 'scissors' | 'lizard' | 'spock';
		children: Snippet;
		onClick?: (e: MouseEvent) => void,
		onKeyDown?: (e: KeyboardEvent) => void,
		style?: string;
		className: string;
		id: string;
	}

	type buttonEvents = {
		click: MouseEvent;
		keydown: KeyboardEvent;
	}

	const buttonVariants = cva('inline-flex items-center justify-center rounded-full p-3 bg-gradient-to-b cursor-pointer inset-shadow-[0_5px_0px_rgba(0,0,40,0.2)] rotate-180 transition-all hover:inset-shadow-[0_3px_0px_rgba(0,0,40,0.2)] hover:translate-y-[3px]', {
		variants: {
			variant: {
				rock: 'from-rock-dark to-rock-light',
                paper: 'from-paper-dark to-paper-light',
                scissors: 'from-scissors-dark to-scissors-light',
                lizard: 'from-lizard-dark to-lizard-light',
                spock: 'from-spock-dark to-spock-light'
			}
		}, 
	});

	
	let {
		variant = 'rock',
		onClick = () => {},
		onKeyDown = () => {},
		children,
		class: className = '',
		style: _style = '',
	} = $props<{
		variant?: buttonProps['variant'],
		onClick?: buttonProps['onClick'],
		onKeyDown?: buttonProps['onKeyDown'],
		children: buttonProps['children'],
		class?: buttonProps['className'],
		id: buttonProps['id']
		style?: buttonProps['style']
	}>();

	export { className as class };
</script>

<button 
class={cn(buttonVariants({ variant }), className )}
onclick={onClick}
onkeydown={onClick}
>
<div class="inline-flex items-center bg-white w-20 h-20 rounded-full  justify-center inset-shadow-[0_5px_0px_rgba(0,0,90,0.20)] rotate-180 transition-all hover:inset-shadow-[0_3px_0px_rgba(0,0,90,0.20)] text-black">
<div class="w-[60%] h-[60%] flex items-center justify-center">
{@render children()}
</div>
</div>
	
</button>