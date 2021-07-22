import { getGameBoard, getScore, reset } from './view/ui.js';
import { GameObject } from "./objects/gameObject.js";
import { Snake } from './objects/snake.js';
import { Food } from './objects/food.js';
import { Grid } from './view/grid.js';

const grid = new Grid();
export const snake = new Snake(grid.center);
const food = new Food();

const gameObjects: GameObject[] = [ snake, food ];

let lastRenderTime: number = 0;
let gameOver: boolean = false;

function gameLoop(currentTime: number) {
    if (gameOver) {
        if (confirm("You lost! Your score is: " + getScore() + " points.\nPress ok to restart.")) {
            window.location.href = "https://snake-ts-game.herokuapp.com/";
        }
        return;
    }

    if (reset()) {
        window.location.href = "https://snake-ts-game.herokuapp.com/";
        return;
    }
    
    window.requestAnimationFrame(gameLoop);
    let secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / snake.speed) {
        return;
    }
    lastRenderTime = currentTime;

    update();
    draw();
}

window.requestAnimationFrame(gameLoop);

function update() {
    gameObjects.forEach(go => {
        go.update();
    })
    checkDeath();
}

function draw() {
    let gameBoard = getGameBoard();
    gameObjects.forEach(go => {
        go.draw(gameBoard);
    })
}

function checkDeath() {
    gameOver = grid.isOutside(snake.head) || snake.isIntersecting();
}