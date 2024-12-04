import { BaseException } from './BaseExceptions';

export class BadRequestException extends BaseException {
    constructor(message: string = 'Bad Request') {
        super(message, 400);
    }
}
