import { SCORE_POINTS_MULTIPLIER } from '../helpers/constants.js';
import { generateRandomPosition } from "../helpers/utilities.js";
import { GameObject } from "./gameObject.js";
import { getSpeed, getExpansionRate, updateScore } from '../view/ui.js';
import { snake } from '../game.js';
let position;
export class Food extends GameObject {
    constructor() {
        super();
        position = generateRandomFoodPosition();
    }
    get position() {
        return position;
    }
    update() {
        if (snake.isPointOnSnake(position)) {
            let expansion = getExpansionRate();
            snake.expandSnake(expansion);
            updateScore(SCORE_POINTS_MULTIPLIER * getSpeed() * expansion);
            position = generateRandomFoodPosition();
        }
    }
    draw(gameBoard) {
        const foodElement = document.createElement('div');
        foodElement.style.gridRowStart = position.y.toString();
        foodElement.style.gridColumnStart = position.x.toString();
        foodElement.classList.add('food');
        gameBoard.appendChild(foodElement);
    }
}
function generateRandomFoodPosition() {
    let newFoodPosition = generateRandomPosition();
    while (snake.isPointOnSnake(newFoodPosition)) {
        newFoodPosition = generateRandomPosition();
    }
    return newFoodPosition;
}
