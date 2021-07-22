import { GRID_SIZE } from './constants.js';
export function generateRandomPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    };
}
export function positionsAreEqual(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}
