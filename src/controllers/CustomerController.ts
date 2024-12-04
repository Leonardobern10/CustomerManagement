import { Response, Request } from 'express';
import { CustomerService } from '../services/CustomerService';

const service = new CustomerService();

/**
 * Insere um novo cliente no sistema.
 * Recebe o nome e email no corpo da requisição e utiliza o serviço para criar o cliente.
 * Retorna o cliente criado com status 201, ou um erro com status 500 caso ocorra alguma falha.
 */
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

    /**
     * Lista todos os clientes do sistema.
     * Utiliza o serviço para buscar todos os clientes e retorna com status 200.
     * Caso ocorra uma falha, retorna um erro com status 500.
     */
    async getAll(req: Request, res: Response) {
        try {
            const allCustomers = await service.listAll();
            res.status(200).json(allCustomers);
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }
    /**
     * Busca um cliente específico pelo ID.
     * Recebe o ID como parâmetro na URL e utiliza o serviço para buscar o cliente.
     * Retorna o cliente encontrado com status 200, ou status 404 caso não exista.
     * Em caso de erro, retorna um status 500.
     */
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

    /**
     * Atualiza os dados de um cliente existente.
     * Recebe o ID como parâmetro na URL e os novos dados (nome e email) no corpo da requisição.
     * Utiliza o serviço para atualizar os dados do cliente.
     * Retorna status 200 com uma mensagem de sucesso, ou status 404 caso o cliente não seja encontrado.
     * Em caso de erro, retorna um status 500 com uma mensagem de falha.
     */
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

    /**
     * Remove um cliente do sistema.
     * Recebe o ID do cliente como parâmetro na URL e utiliza o serviço para deletar o cliente.
     * Retorna status 200 com uma mensagem de sucesso, ou status 500 em caso de falha.
     */
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
