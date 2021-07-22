import { SPEED_MULTIPLIER } from '../helpers/constants.js'
import { Point, positionsAreEqual } from "../helpers/utilities.js";
import { GameObject } from "./gameObject.js";
import { getInputDirection } from "../controls/input.js";
import { getSpeed } from "../view/ui.js";

let body: Point[];
let segments: number;
let inputDirection: Point;

export class Snake extends GameObject {
    constructor(gridCenter: Point) {
        super();
        body = [gridCenter];
        segments = 0;
        inputDirection = {x: 0, y: 0};
    }

    get head(): Point {
        return body[0];
    }
    get speed(): number {
        return getSpeed() * SPEED_MULTIPLIER;
    }

    update() {
        if (segments !== 0) {
            for (let i = 0; i < segments; i++) {
                body.push({...body[body.length - 1]});
            }
            segments = 0;
        }
        
        inputDirection = getInputDirection();
        
        for (let i = body.length - 2; i >= 0; i--) {
            body[i+1] = {...body[i]};
        }
    
        body[0].x += inputDirection.x;
        body[0].y += inputDirection.y;
    }
    
    draw(gameBoard: HTMLElement) {
        body.forEach(segment => {
            const snakeElement = document.createElement('div');
            snakeElement.style.gridRowStart = segment.y.toString();
            snakeElement.style.gridColumnStart = segment.x.toString();
            snakeElement.classList.add('snake');
            if (segment === body[0]){
                snakeElement.classList.add('eyes');
                if (inputDirection.y === 1)
                {
                    snakeElement.classList.add('down');
                } else if (inputDirection.x === -1)
                {
                    snakeElement.classList.add('left');
                } else if (inputDirection.x === 1)
                {
                    snakeElement.classList.add('right');
                }
            }
            gameBoard.appendChild(snakeElement);
        })
    }

    expandSnake(amount: number) {
        segments += amount;
    }

    isPointOnSnake(position: Point, {ignoreHead = false} = {}): boolean {
        return body.some((segment, index) => {
            if (ignoreHead && index === 0) {
                return false;
            }
            return positionsAreEqual(segment, position);
        });
    }
    
    isIntersecting(): boolean {
        return this.isPointOnSnake(body[0], {ignoreHead: true});
    }
}