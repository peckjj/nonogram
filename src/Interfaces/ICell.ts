import { CellMark } from "../Enums/CellMark";
import { CellState } from "../Enums/CellState";

export interface ICell {
    isOn: boolean;
    isRevealed: boolean;
    state: CellState;
    mark: CellMark;
    x: number;
    y: number;

    copy(): ICell;
}