import { CellMark } from "../Enums/CellMark";
import { CellState } from "../Enums/CellState";
import { NonogramWrongMoveError } from "../Errors/NonogramWrongMoveError";
import { IGame } from "../Interfaces/IGame";
import { IGrid } from "../Interfaces/IGrid";

export class Game implements IGame {
    grid: IGrid;


    constructor(grid: IGrid) {
        this.grid = grid;
    }

    changeMark(x: number, y: number, mark: CellMark): void {
        this.grid.getCell(x, y).mark = mark;
    }
    setState(x: number, y: number, state: CellState): number {
        let newGrid = this.grid.copy();
        let cell = newGrid.getCell(x, y);

        if (cell.state != state) {
            throw new NonogramWrongMoveError();
        }
        
        return 0;
    }

}