<script lang="ts">
    import { moves, determineWinner, type Move } from "$lib/gameLogic";
    import { gameState, updateScore } from "$lib/gameState.svelte";
	import { moveIcons } from "$lib/moveIcons";
	import Button from "./Button.svelte";
	import GameButton from "./GameButton.svelte";


    let step = $state<1 | 2 | 3>(1);
    let playerMove = $state<Move | null>(null);
    let computerMove = $state<Move | null>(null);
    let result = $state<'player' | 'computer' | 'tie' | null>(null);

	function handleSelection(selection: Move) {
		playerMove = selection;
		step = 2;
    function handleSelection(selection: Move) {
        playerMove = selection;
        step = 2;

		setTimeout(() => {
			computerMove = moves[Math.floor(Math.random() * moves.length)];
			if (playerMove && computerMove) {
				result = determineWinner(playerMove, computerMove);
			}
			if (result !== null) {
				updateScore(result);
			}
			step = 3;
		}, 1000);
	}
        setTimeout(() => {
            computerMove = moves[Math.floor(Math.random() * moves.length)];
            if (playerMove && computerMove) {
                result = determineWinner(playerMove, computerMove);
            }
            if (result !== null) {
                updateScore(result); 
            }
            step = 3; 
        }, 1000); 
    }

	function resetGame() {
		step = 1;
		playerMove = null;
		computerMove = null;
		result = null;
	}

</script>

<section>
	{#if step === 1}
		<div class="w-full grid items-center" id="game-buttons">
			{#each moves as move}
				<GameButton 
                onClick={() => handleSelection(move)} 
                variant={move} 
                id={move}
                style={`grid-area: {move};`}
                >
					{@html moveIcons[move]}
				</GameButton>
			{/each}
		</div>
	{:else if step === 2}
		<div>
			<h1 class="text-4xl">{playerMove}</h1>
			<p>You picked</p>
		</div>
		<p>The house picked</p>
	{:else if step === 3}
		{#if playerMove && computerMove}
			<p class="uppercase text-5xl font-semibold">
				{result === 'tie' ? 'Tie' : `You ${result === 'player' ? 'win' : 'lose'}`}
			</p>
		{/if}
		<Button onClick={() => (step = 1)}>Play Again</Button>
	{/if}
</section>