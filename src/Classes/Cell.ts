import { CellMark } from "../Enums/CellMark";
import { CellState } from "../Enums/CellState";
import { ICell } from "../Interfaces/ICell";

export class Cell implements ICell {
    private _state: CellState = CellState.NONE;
    private _mark: CellMark = CellMark.BLANK;
    private _x: number;
    private _y: number;
    private _isOn: boolean;
    private _isRevealed: boolean;
    
    public constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
        this._isOn = false;
        this._isRevealed = false;
    }

    get isRevealed() {
        return this._isRevealed;
    }

    set isRevealed(value: boolean) {
        this._isRevealed = value;
    }

    public get state() {
        return this._state;
    }
    
    private set state(value: CellState) {
        this._state = value;
    }
    
    public get mark() {
        return this._mark;
    }
    
    public set mark(value: CellMark) {
        this._mark = value;
    }
    
    public get x(): number {
        return this._x;
    }

    public set x(value: number) {
        this._x = value;
    }

    public get y(): number {
        return this._y;
    }

    public set y(value: number) {
        this._y = value;
    }

    public get isOn(): boolean {
        return this._isOn;
    }
    public set isOn(value: boolean) {
        this._isOn = value;
    }

    public copy(): ICell {
        let cell = new Cell(this.x, this.y);

        cell._mark = this._mark;
        cell._state = this._state;
        cell._x = this._x;
        cell._y = this._y;
        cell._isOn = this.isOn;

        return cell;
    }
}