import { BaseException } from './BaseExceptions';

export class BadRequestException extends BaseException {
    constructor(message: string) {
        super(message, 400);
    }
}
