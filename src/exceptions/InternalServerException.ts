import { BaseException } from './BaseExceptions';

export class InternalServerException extends BaseException {
    constructor(message: string = 'Internal Server Error') {
        super(message, 500);
    }
}
