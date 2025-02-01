<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
	import "../app.css";
	import Button from '../components/Button.svelte';
	import Scorecard from '../components/Scorecard.svelte';
</script>
<main class="w-full h-full flex flex-col items-center justify-between gap-4 bg-radial from-medium-blue to-dark-blue p-4">
	<Scorecard />
{@render children()}
<Button onClick={() => console.log('hello')} variant="outline">Rules</Button>
</main>
