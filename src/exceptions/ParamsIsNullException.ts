import { BaseException } from './BaseExceptions';

export class ParamsIsNullException extends BaseException {
    constructor(message: string = 'Param(s) has value null') {
        super(message, 400);
        this.name = 'ParamsIsNullException';
    }
}
