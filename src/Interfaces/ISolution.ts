import { Constants } from "../Classes/Contants";
import { NonogramSequenceError } from "../Errors/NonogramSequenceError";
import { IGrid } from "./IGrid";

export abstract class ISolution {
    private _sequence!: string;

    get sequence() {
        return this._sequence;
    }

    set sequence(value: string) {
        if (!this.verifySequence(value)) {
            this.sequence = "";
            throw new NonogramSequenceError("Invalid Sequence: " + value);
        }

        this._sequence = value;
    }

    constructor(sequence: string) {
        this.sequence = sequence;
    }

    print() {
        console.log(this.sequence);
    }

    verifySequence(seq: string): boolean {
        // split sequence into rows. double check that the length of each row is equal
        let rows = seq.split(Constants.SequenceConsts.ROW_DELIMIT);

        if (rows.length < 1) return false;

        let length = rows[0].length;

        for (let row of rows) {
            if (row.length != length) return false;
        }

        return true;
    }

    abstract createGrid(): IGrid;
}