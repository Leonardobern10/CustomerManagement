import { NotFoundException } from '../exceptions/NotFoundException';
import { Customer } from '../entities/Customer';

export class CustomerExists {
    static validate = (customer: Customer | null) => {
        if (!customer) {
            throw new NotFoundException('Customer not found.');
        }
    };
}
