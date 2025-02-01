<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
	import "../app.css";
	import Button from '../components/Button.svelte';
</script>
<main class="h-screen w-full">
{@render children()}
<Button onClick={() => console.log('hello')} variant="default">Rules</Button>
</main>
