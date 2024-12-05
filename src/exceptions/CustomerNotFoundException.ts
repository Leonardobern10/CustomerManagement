export class CustomerNotFoundException extends Error {
    constructor(message: string = 'Customer not found on database') {
        super(message);
        this.name = 'CustomerNotFoundException';
    }
}
