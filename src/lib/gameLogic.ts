export type Choice = 'rock' | 'paper' | 'scissors' | 'lizard' | 'spock';
export const choices: Choice[] = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const winningMoves: { [key: string]: string[] } = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['spock', 'paper'],
    spock: ['rock', 'scissors'],
}

export function determineWinner(playerMove: Choice, computerMove: Choice): 'player' | 'computer' | 'tie' {
    if (playerMove === computerMove) {
        return 'tie';
    }

    if (winningMoves[playerMove].includes(computerMove)) {
        return 'player';
    }

    return 'computer';
}