import { loadGameState, saveGameState } from "./storage";

type GameState = {
	playerScore: number;
};

export const gameState = $state<GameState>(loadGameState());

    export function updateScore(result: 'player' | 'computer' | 'tie') {
			if (result === 'player') {
				gameState.playerScore += 1;
			}
			saveGameState(gameState);
		}

