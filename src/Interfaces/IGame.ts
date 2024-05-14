import { CellMark } from "../Enums/CellMark";
import { CellState } from "../Enums/CellState";
import { IGrid } from "./IGrid";

export interface IGame {
    grid: IGrid;

    changeMark(x: number, y: number, mark: CellMark): void
    setState(x: number, y: number, state: CellState): number;
}