import { Response, Request } from 'express';
import { CustomerService } from '../services/CustomerService';

const service = new CustomerService();
export class CustomerController {
    async insert(req: Request, res: Response) {
        try {
            const { name, email } = req.body;
            const newCustomer = await service.create(name, email);
            res.status(201).json(newCustomer);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const allCustomers = await service.listAll();
            res.status(200).json(allCustomers);
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }

    async getId(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const customer = await service.listById(id);

            if (customer) {
                res.status(200).json(customer);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    async updateCustomer(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const { name, email } = req.body;
            const customer = await service.update(id, name, email);

            if (customer) {
                res.status(200).json({ message: 'Customer updated!' });
            } else {
                res.status(404).json({ message: 'Customer not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error to uptade customer' });
        }
    }

    async deleteCustomer(req: Request, res: Response) {
        try {
            const id = req.params.id;
            await service.detele(id);
            res.status(200).json({ message: 'Customer deleted!' });
        } catch (error) {
            res.status(500).json({
                message: 'Error on delete customer',
                error,
            });
        }
    }
}
