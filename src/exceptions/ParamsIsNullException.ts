export class ParamsIsNullException extends Error {
    constructor(error: string = 'Param(s) has value null') {
        super(error);
        this.name = 'ParamsIsNullException';
    }
}
