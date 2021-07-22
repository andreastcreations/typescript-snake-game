import { Point } from "../helpers/utilities.js";
import { disableInputFields } from "../view/ui.js";

let inputDirection: Point = {x: 0, y: 0};
let lastInputDirection: Point = {x: 0, y: 0};
let gameStarted: boolean = false;

function getInput(event: KeyboardEvent) {
    if (!gameStartedCheck(event)) {
        return;
    }

    switch (event.key) {
        case 'w':
            if (lastInputDirection.y !== 0) {
                break;
            }
            inputDirection = {x: 0, y: -1};
            break;
        case 's':
            if (lastInputDirection.y !== 0) {
                break;
            }
            inputDirection = {x: 0, y: 1};
            break;
        case 'a':
            if (lastInputDirection.x !== 0) {
                break;
            }
            inputDirection = {x: -1, y: 0};
            break;
        case 'd':
            if (lastInputDirection.x !== 0) {
                break;
            }
            inputDirection = {x: 1, y: 0};
            break;
    }
}

function gameStartedCheck(event: KeyboardEvent): boolean {
    if (!gameStarted) {
        if (event.key === 'w' || event.key === 's' || event.key === 'a' || event.key === 'd') {
            disableInputFields();
            gameStarted = true;
        }
    }

    return gameStarted;
}

window.addEventListener('keydown', getInput);

export function getInputDirection(): Point {
    lastInputDirection = inputDirection;
    return inputDirection;
}