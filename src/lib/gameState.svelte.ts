import { loadGameState } from "./storage";

type GameState = {
	playerScore: number;
};

export const gameState = $state<GameState>(loadGameState());

export function updateScore(result: string) {
	if (result === 'player') {
		gameState.playerScore += 1;
	} 
}
