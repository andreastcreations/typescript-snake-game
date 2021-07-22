import { GRID_SIZE } from '../helpers/constants.js';
export class Grid {
    get size() {
        return GRID_SIZE;
    }
    get center() {
        return { x: (GRID_SIZE + 1) / 2, y: (GRID_SIZE + 1) / 2 };
    }
    isOutside(position) {
        return position.x < 1 ||
            position.x > GRID_SIZE ||
            position.y < 1 ||
            position.y > GRID_SIZE;
    }
}
