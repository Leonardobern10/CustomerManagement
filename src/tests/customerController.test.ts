import { CustomerController } from '../controllers/CustomerController';
import { CustomerService } from '../services/CustomerService';
import { Request, Response } from 'express';

jest.mock('../services/CustomerService');

describe('CustomerController', () => {
    let customerController: CustomerController;
    let customerService: jest.Mocked<CustomerService>;
    const mockReq = {} as Request;
    const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
    } as unknown as Response;

    beforeAll(() => {
        customerService = new CustomerService() as jest.Mocked<CustomerService>;
        customerController = new CustomerController();
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('deve criar um cliente', async () => {
        const mockCustomer = {
            id: '1',
            name: 'John Doe',
            email: 'John@email.com',
        };

        customerService.create.mockResolvedValue(mockCustomer);

        mockReq.body = {
            name: 'John Doe',
            email: 'john@example.com',
        };

        await customerController.insert(mockReq, mockRes);

        expect(customerService.create).toHaveBeenCalledWith(
            'John Doe',
            'john@example.com'
        );
        expect(mockRes.status).toHaveBeenCalledWith(201);
        expect(mockRes.json).toHaveBeenCalledWith(mockCustomer);
    });

    it('deve listar todos os clientes', async () => {
        const mockCustomers = [
            { id: '1', name: 'John Doe', email: 'john@email.com' },
        ];

        customerService.listAll.mockResolvedValue(mockCustomers);

        await customerController.getAll(mockReq, mockRes);

        expect(customerService.listAll).toHaveBeenCalled();
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith(mockCustomers);
    });

    it('deve retornar erro ao buscar cliente inexistente', async () => {
        customerService.listById.mockResolvedValue(null);
        mockReq.params = { id: '99' };

        await customerController.getId(mockReq, mockRes);

        expect(customerService.listById).toHaveBeenCalledWith(99);
        expect(mockRes.status).toHaveBeenCalledWith(404);
        expect(mockRes.json).toHaveBeenCalledWith({
            message: 'Cliente não encontrado',
        });
    });
});
