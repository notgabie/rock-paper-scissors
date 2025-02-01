<script lang="ts">
    import { choices, determineWinner, type Choice } from "$lib/gameLogic";
    import { gameState, updateScore } from "$lib/gameState.svelte";

    let step = $state<1 | 2 | 3>(1);
    let playerChoice = $state<Choice | null>(null);
    let computerChoice = $state<Choice | null>(null);
    let result = $state<'player' | 'computer' | 'tie' | null>(null);

    function handleChoice(choice: Choice) {
        playerChoice = choice;
        step = 2;

        setTimeout(() => {
            computerChoice = choices[Math.floor(Math.random() * choices.length)];
            if (playerChoice && computerChoice) {
                result = determineWinner(playerChoice, computerChoice);
            }
            if (result !== null) {
                updateScore(result); 
            }
            step = 3; 
        }, 1000); 
    }

    function resetGame() {
        step = 1;
        playerChoice = null;
        computerChoice = null;
        result = null;
    }
</script>

<div class="w-full h-full flex flex-col items-center justify-center gap-4">
    {#if step === 1}
        <h1 class="text-4xl">Choose your weapon</h1>
        <div class="flex gap-2">
            {#each choices as choice}
                <button class="ring-2 rounded-md p-3" onclick={() => handleChoice(choice)}>
                    {choice}
                </button>
            {/each}
        </div>
    {:else if step === 2}
        <p>You picked</p>
        <h1 class="text-4xl">{playerChoice}</h1>
        <p>The house is choosing...</p>
    {:else if step === 3}
        <h1 class="text-4xl">Result</h1>
        {#if playerChoice && computerChoice}
            <p>You picked {playerChoice}, computer picked {computerChoice}.</p>
            <p>
                {result === 'tie'
                    ? "It's a tie!"
                    : `You ${result === 'player' ? 'won' : 'lost'}!`}
            </p>
                    
        {/if}
        <button onclick={resetGame}>Play Again</button>
    {/if}
    <p>Your score: {gameState.playerScore}</p>
</div>