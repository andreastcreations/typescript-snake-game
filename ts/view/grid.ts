import { GRID_SIZE } from '../helpers/constants.js'
import { Point } from "../helpers/utilities.js";

export class Grid {
    get size(): number {
        return GRID_SIZE;
    }
    get center(): Point {
        return {x: (GRID_SIZE + 1) / 2, y: (GRID_SIZE + 1) / 2};
    }

    isOutside(position: Point): boolean {
        return position.x < 1 ||
            position.x > GRID_SIZE ||
            position.y < 1 ||
            position.y > GRID_SIZE;
    }
}