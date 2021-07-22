import { SPEED_MULTIPLIER } from '../helpers/constants.js';
import { positionsAreEqual } from "../helpers/utilities.js";
import { GameObject } from "./gameObject.js";
import { getInputDirection } from "../controls/input.js";
import { getSpeed } from "../view/ui.js";
let body;
let segments;
let inputDirection;
export class Snake extends GameObject {
    constructor(gridCenter) {
        super();
        body = [gridCenter];
        segments = 0;
        inputDirection = { x: 0, y: 0 };
    }
    get head() {
        return body[0];
    }
    get speed() {
        return getSpeed() * SPEED_MULTIPLIER;
    }
    update() {
        if (segments !== 0) {
            for (let i = 0; i < segments; i++) {
                body.push(Object.assign({}, body[body.length - 1]));
            }
            segments = 0;
        }
        inputDirection = getInputDirection();
        for (let i = body.length - 2; i >= 0; i--) {
            body[i + 1] = Object.assign({}, body[i]);
        }
        body[0].x += inputDirection.x;
        body[0].y += inputDirection.y;
    }
    draw(gameBoard) {
        body.forEach(segment => {
            const snakeElement = document.createElement('div');
            snakeElement.style.gridRowStart = segment.y.toString();
            snakeElement.style.gridColumnStart = segment.x.toString();
            snakeElement.classList.add('snake');
            if (segment === body[0]) {
                snakeElement.classList.add('eyes');
                if (inputDirection.y === 1) {
                    snakeElement.classList.add('down');
                }
                else if (inputDirection.x === -1) {
                    snakeElement.classList.add('left');
                }
                else if (inputDirection.x === 1) {
                    snakeElement.classList.add('right');
                }
            }
            gameBoard.appendChild(snakeElement);
        });
    }
    expandSnake(amount) {
        segments += amount;
    }
    isPointOnSnake(position, { ignoreHead = false } = {}) {
        return body.some((segment, index) => {
            if (ignoreHead && index === 0) {
                return false;
            }
            return positionsAreEqual(segment, position);
        });
    }
    isIntersecting() {
        return this.isPointOnSnake(body[0], { ignoreHead: true });
    }
}
