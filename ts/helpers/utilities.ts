import { GRID_SIZE } from './constants.js'

export interface Point {
    x: number;
    y: number;
}

export function generateRandomPosition(): Point {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
}

export function positionsAreEqual(pos1: Point, pos2: Point): boolean {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}