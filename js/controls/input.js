import { disableInputFields } from "../view/ui.js";
let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };
let gameStarted = false;
function getInput(event) {
    if (!gameStartedCheck(event)) {
        return;
    }
    switch (event.key) {
        case 'w':
            if (lastInputDirection.y !== 0) {
                break;
            }
            inputDirection = { x: 0, y: -1 };
            break;
        case 's':
            if (lastInputDirection.y !== 0) {
                break;
            }
            inputDirection = { x: 0, y: 1 };
            break;
        case 'a':
            if (lastInputDirection.x !== 0) {
                break;
            }
            inputDirection = { x: -1, y: 0 };
            break;
        case 'd':
            if (lastInputDirection.x !== 0) {
                break;
            }
            inputDirection = { x: 1, y: 0 };
            break;
    }
}
function gameStartedCheck(event) {
    if (!gameStarted) {
        if (event.key === 'w' || event.key === 's' || event.key === 'a' || event.key === 'd') {
            disableInputFields();
            gameStarted = true;
        }
    }
    return gameStarted;
}
window.addEventListener('keydown', getInput);
export function getInputDirection() {
    lastInputDirection = inputDirection;
    return inputDirection;
}
