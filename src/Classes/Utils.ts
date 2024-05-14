import { ISolution } from "../Interfaces/ISolution";
import { CellGridSolution } from "./CellGridSolution";
import { Constants } from "./Contants";

export class Utils {
    static RandomSolution(fill: number, width: number, height: number): ISolution {
        // generate char list (random X or .)
        let charList = [];

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                if (Math.random() < fill) {
                    charList.push('X');
                } else {
                    charList.push(Constants.SequenceConsts.IS_OFF_SYMBOL);
                }
            }
            charList.push('\n');
        }

        // join
        return new CellGridSolution(charList.join('').trim());
    }
}