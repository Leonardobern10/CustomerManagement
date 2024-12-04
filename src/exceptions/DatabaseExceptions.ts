export class DatabaseException extends Error {
    constructor(message: string = 'Database operation failed') {
        super(message);
        this.name = 'DatabaseException';
    }
}
