import { MAX_INPUT_FIELD_VALUE } from '../helpers/constants.js'

const gameBoard = document.getElementById('game-board') as HTMLElement;
const score = document.getElementById('score') as HTMLInputElement;
const snakeSpeedInput = document.getElementById('snake-speed') as HTMLInputElement;
const snakeExpansionInput = document.getElementById('snake-expansion') as HTMLInputElement;
const resetButton = document.getElementById('reset') as HTMLButtonElement;

let resetButtonPressed: boolean = false;

resetButton.addEventListener('click', () => { resetButtonPressed = true; });
snakeSpeedInput.addEventListener('input', inputCheck);
snakeExpansionInput.addEventListener('input', inputCheck);

export function getGameBoard(): HTMLElement {
    gameBoard.innerHTML = "";
    return gameBoard;
}

export function getScore(): number {
    return score.valueAsNumber;
}

export function updateScore(amount: number) {
    score.valueAsNumber += amount;
}

export function getSpeed(): number {
    return snakeSpeedInput.valueAsNumber;
}

export function getExpansionRate(): number {
    return snakeExpansionInput.valueAsNumber;
}

export function reset(): boolean {
    return resetButtonPressed;
}

export function disableInputFields() {
    changeInputField(snakeSpeedInput);
    changeInputField(snakeExpansionInput);
}

function inputCheck(this: HTMLInputElement) {
    if (isNaN(this.valueAsNumber) || this.valueAsNumber < 1) {
        this.valueAsNumber = 1;
    }
    
    if (this.valueAsNumber > MAX_INPUT_FIELD_VALUE) {
        this.valueAsNumber = MAX_INPUT_FIELD_VALUE;
    }
}

function changeInputField(input: HTMLInputElement) {
    input.readOnly = true;
    input.style.color = '#0007';
    input.style.backgroundColor = '#999';
}