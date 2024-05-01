import { ICell } from "./ICell";

export interface IGrid {
    readonly height: number;
    readonly width: number;
    
    getCell(x: number, y: number): ICell;
    getColumn(col: number): ICell[];
    getColumnMarkers(col: number): number[];
    getRow(row: number): ICell[];
    getRowMarkers(row: number): number[];
}