import { AppDataSource } from '../config/database';
import { Customer } from '../entities/Customer';

export class CustomerService {
    private repository = AppDataSource.getRepository(Customer);

    async create(name: string, email: string): Promise<Customer> {
        const newCustomer = new Customer();
        newCustomer.name = name;
        newCustomer.email = email;

        return await this.repository.save(newCustomer);
    }

    async listAll(): Promise<Customer[]> {
        return await this.repository.find();
    }

    async listById(id: string): Promise<Customer | null> {
        return await this.repository.findOneBy({ id });
    }

    async update(
        id: string,
        name: string,
        email: string
    ): Promise<Customer | null> {
        let customer = await this.listById(id);
        if (customer) {
            customer.name = name;
            customer.email = email;
            return await this.repository.save(customer);
        }
        return null;
    }

    async detele(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}
