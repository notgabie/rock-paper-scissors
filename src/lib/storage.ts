export function saveGameState(state: { playerScore: number, computerScore: number }) {
    localStorage.setItem('gameState', JSON.stringify(state));
}

export function loadGameState(): { playerScore: number, computerScore: number } {
    const gameState = localStorage.getItem('gameState');
    return gameState ? JSON.parse(gameState) : { playerScore: 0, computerScore: 0 };
}