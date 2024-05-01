import { IGrid } from "../Interfaces/IGrid";
import { NonogramError } from "./NonogramError";

export class NonogramCoordError extends NonogramError {

    constructor(x: number, y: number, grid: IGrid, options?: ErrorOptions) {
        let message = `Invalid coordinates (${x}, ${y}) with grid dimensions (${grid.width}, ${grid.height})`;

        super(message, options);
    }
}