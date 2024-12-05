import { BaseException } from './BaseExceptions';

export class DatabaseException extends BaseException {
    constructor(message: string = 'Database operation failed') {
        super(message, 500);
        this.name = 'DatabaseException';
    }
}
