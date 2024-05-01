import { Abs_Solution } from "../Interfaces/ISolution";
import { IGrid } from "../Interfaces/IGrid";
import { CellGrid } from "./CellGrid";
import { Constants } from "./Contants";

export class CellGridSolution extends Abs_Solution {
    
    override createGrid(): IGrid {
        let data = this.sequence.split(Constants.SequenceConsts.ROW_DELIMIT);
        let width = data[0].length;
        let height = data.length;

        let grid = new CellGrid(height, width);
        for (let y = 0; y < grid.height; y++) {
            for (let x = 0; x < grid.width; x++) {
                grid.getCell(x, y).isOn = data[y].charAt(x) != Constants.SequenceConsts.IS_OFF_SYMBOL;
            }
        }

        return grid;
    }

}