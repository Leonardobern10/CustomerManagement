import { NextFunction, Request, Response } from 'express';
import { CustomerService } from '../services/CustomerService';
import { BadRequestException } from '../exceptions/BadRequestException';
import { InternalServerException } from '../exceptions/InternalServerException';
import { NotFoundException } from '../exceptions/NotFoundException';

const service = new CustomerService();

export class CustomerController {
    async insert(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, email } = req.body;
            if (!name || !email) {
                throw new BadRequestException(
                    'Both name and email are required.'
                );
            }
            const newCustomer = await service.create(name, email);
            res.status(201).json(newCustomer);
        } catch (error: any) {
            next(error);
        }
    }

    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const allCustomers = await service.listAll();
            res.status(200).json(allCustomers);
        } catch (error: any) {
            next(error);
        }
    }

    async getId(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id;
            const customer = await service.listById(id);

            if (!customer) {
                throw new NotFoundException('Customer not found.');
            }

            res.status(200).json(customer);
        } catch (error: any) {
            next(error);
        }
    }

    async updateCustomer(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id;
            const { name, email } = req.body;
            if (!name || !email) {
                throw new BadRequestException(
                    'Both name and email are required for update.'
                );
            }

            const customer = await service.update(id, name, email);
            if (!customer) {
                throw new NotFoundException('Customer not found.');
            }

            res.status(200).json({ message: 'Customer updated!' });
        } catch (error: any) {
            next(error);
        }
    }

    async deleteCustomer(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id;
            const customer = await service.listById(id);

            if (!customer) {
                throw new NotFoundException('Customer not found.');
            }

            await service.detele(id);
            res.status(200).json({ message: 'Customer deleted!' });
        } catch (error: any) {
            next(error);
        }
    }
}
