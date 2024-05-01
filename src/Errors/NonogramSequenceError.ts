import { NonogramError } from "./NonogramError";

export class NonogramSequenceError extends NonogramError {

    constructor(message?: string, options?: ErrorOptions) {
        super(message, options);
    }
}