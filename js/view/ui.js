import { MAX_INPUT_FIELD_VALUE } from '../helpers/constants.js';
const gameBoard = document.getElementById('game-board');
const score = document.getElementById('score');
const snakeSpeedInput = document.getElementById('snake-speed');
const snakeExpansionInput = document.getElementById('snake-expansion');
const resetButton = document.getElementById('reset');
let resetButtonPressed = false;
resetButton.addEventListener('click', () => { resetButtonPressed = true; });
snakeSpeedInput.addEventListener('input', inputCheck);
snakeExpansionInput.addEventListener('input', inputCheck);
export function getGameBoard() {
    gameBoard.innerHTML = "";
    return gameBoard;
}
export function getScore() {
    return score.valueAsNumber;
}
export function updateScore(amount) {
    score.valueAsNumber += amount;
}
export function getSpeed() {
    return snakeSpeedInput.valueAsNumber;
}
export function getExpansionRate() {
    return snakeExpansionInput.valueAsNumber;
}
export function reset() {
    return resetButtonPressed;
}
export function disableInputFields() {
    changeInputField(snakeSpeedInput);
    changeInputField(snakeExpansionInput);
}
function inputCheck() {
    if (isNaN(this.valueAsNumber) || this.valueAsNumber < 1) {
        this.valueAsNumber = 1;
    }
    if (this.valueAsNumber > MAX_INPUT_FIELD_VALUE) {
        this.valueAsNumber = MAX_INPUT_FIELD_VALUE;
    }
}
function changeInputField(input) {
    input.readOnly = true;
    input.style.color = '#0007';
    input.style.backgroundColor = '#999';
}
