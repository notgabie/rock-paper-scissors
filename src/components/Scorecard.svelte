<script>

	import { gameState } from "$lib/gameState.svelte";

</script>
<div class="flex justify-between items-center p-3 border-2 border-outline rounded-md w-[95%] mt-2 shadown-md">
    <h1 class="w-11 uppercase text-sm leading-3 font-semibold ml-3">Rock paper scissors lizard spock</h1>
    <div class="bg-white w-fit rounded-md py-2 px-6 flex flex-col items-center justify-between font-semibold tracking-wider">
        <h3 class="text-score uppercase text-xs">Score</h3>
        <h1 class="text-4xl text-grayish-blue font-extrabold">{gameState.playerScore}</h1>
    </div>
</div>