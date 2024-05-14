import { NonogramCoordError } from "../Errors/NonogramCoordError";
import { ICell } from "../Interfaces/ICell";
import { IGrid } from "../Interfaces/IGrid";
import { Cell } from "./Cell";

export class CellGrid implements IGrid {
    
    readonly height: number;
    readonly width: number;

    private grid!: ICell[][];

    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;

        this.newGrid();
    }

    getCell(x: number, y: number): ICell {
        if (x < 0 || x >= this.width) {
            throw new NonogramCoordError(x, y, this);
        }

        if (y < 0 || y >= this.height) {
            throw new NonogramCoordError(x, y, this);
        }

        return this.grid[y][x];
    }

    private newGrid(): ICell[][] {
        this.grid = [];
        for (let y = 0; y < this.height; y++) {
            this.grid.push([]);
            for (let x = 0; x < this.width; x++) {
                this.grid[y].push(new Cell(x, y));
            }
        }

        return this.grid;
    }

    getColumn(col: number): ICell[] {
        let column = [];
        for (let y = 0; y < this.height; y++) {
            column.push(this.getCell(col, y));
        }

        return column;
    }

    getRow(row: number): ICell[] {
        let ret = [];
        for (let x = 0; x < this.width; x++) {
            ret.push(this.getCell(x, row));
        }

        return ret;
    }

    getColumnMarkers(col: number): number[] {
        let ret = [];
        let column = this.getColumn(col);

        let count = 0;
        for (let y = 0; y < column.length; y++) {
            if (this.getCell(col, y).isOn) {
                count++;
            } else {
                if (count != 0) {
                    ret.push(count);
                }

                count = 0;
            }
        }
        if (count != 0) {
            ret.push(count);
        }

        return ret;
    }
    getRowMarkers(row: number): number[] {
        let ret = [];
        let r = this.getRow(row);

        let count = 0;
        for (let x = 0; x < r.length; x++) {
            if (this.getCell(x, row).isOn) {
                count++;
            } else {
                if (count != 0) {
                    ret.push(count);
                }

                count = 0;
            }
        }
        if (count != 0) {
            ret.push(count);
        }

        return ret;
    }

    copy(): IGrid {
        let newGrid = new CellGrid(this.height, this.width);

        newGrid.allCells().forEach(cell => {
            cell = this.getCell(cell.x, cell.y).copy();
        });

        return newGrid;
    }

    allCells(): ICell[] {
        let ret: ICell[] = [];
        
        this.grid.forEach(row => {
            row.forEach(el => ret.push(el));
        });

        return ret;
    }
}