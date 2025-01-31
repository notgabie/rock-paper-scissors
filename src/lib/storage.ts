import { browser } from "$app/environment";

export function saveGameState(state: { playerScore: number }) {
	localStorage.setItem('gameState', JSON.stringify(state));
}

export function loadGameState() {
	if (browser) {
		const savedState = localStorage.getItem('gameState');
		return savedState ? JSON.parse(savedState) : { playerScore: 0 };
	}
	return { playerScore: 0 };
}