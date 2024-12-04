import { BaseException } from './BaseExceptions';

export class NotFoundException extends BaseException {
    constructor(message: string = 'Resource Not Found') {
        super(message, 404);
    }
}
