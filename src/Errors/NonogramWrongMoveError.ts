import { NonogramError } from "./NonogramError";

export class NonogramWrongMoveError extends NonogramError {
    constructor(message = "Invalid Move", options?: ErrorOptions) {
        super(message, options);
    }
}