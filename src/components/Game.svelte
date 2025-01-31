<script lang="ts">
    import { choices, determineWinner, type Choice } from "$lib/gameLogic";
	import { gameState } from "$lib/gameState.svelte";

    let step = $state<1 | 2 | 3>(1);
    let playerChoice = $state<Choice | null>(null);
    let computerChoice = $state<Choice | null>(null);
    let result = $state<string | null>(null);

    function handleChoice(choice: Choice) {
        playerChoice = choice;
        computerChoice = choices[Math.floor(Math.random() * choices.length)];
        step = 2;
        result = determineWinner(playerChoice, computerChoice);
    }
</script>

<div class="w-full h-full flex flex-col items-center justify-center gap-4">
    {#if step === 1}
        <h1 class="text-4xl">Choose your weapon</h1>
        {#each choices as choice}
        <button class="ring-2 rounded-md p-3" onclick={() => handleChoice(choice)}>{choice}</button>
    {/each}
    {:else if step === 2}
        <p>You picked</p>
        <h1 class="text-4xl">{playerChoice}</h1>
        <p>The house picked</p>
        <h1 class="text-4xl">{computerChoice}</h1>
    {:else if step === 3}
        <h1 class="text-4xl">Result</h1>
    {/if}

</div>