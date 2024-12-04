export class CustomerNotFoundException extends Error {
    constructor(message: string = 'Customer not found') {
        super(message);
        this.name = 'CustomerNotFoundException';
    }
}
