import { AppDataSource } from '../config/database';
import { Customer } from '../entities/Customer';

/**
 * Serviço responsável por gerenciar as operações relacionadas aos clientes.
 * Inclui métodos para criar, listar, buscar por ID, atualizar e excluir clientes.
 */
export class CustomerService {
    private repository = AppDataSource.getRepository(Customer);

    /**
     * Cria um novo cliente no banco de dados.
     * @param name Nome do cliente.
     * @param email Email do cliente.
     * @returns O cliente recém-criado.
     */
    async create(name: string, email: string): Promise<Customer> {
        const newCustomer = new Customer();
        newCustomer.name = name;
        newCustomer.email = email;

        return await this.repository.save(newCustomer);
    }

    /**
     * Lista todos os clientes cadastrados no banco de dados.
     * @returns Uma lista de clientes.
     */
    async listAll(): Promise<Customer[]> {
        return await this.repository.find();
    }

    /**
     * Busca um cliente no banco de dados pelo ID.
     * @param id ID do cliente.
     * @returns O cliente encontrado ou `null` se não existir.
     */
    async listById(id: string): Promise<Customer | null> {
        return await this.repository.findOneBy({ id });
    }

    /**
     * Atualiza os dados de um cliente existente.
     * @param id ID do cliente.
     * @param name Novo nome do cliente.
     * @param email Novo email do cliente.
     * @returns O cliente atualizado ou `null` se não encontrado.
     */
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

    /**
     * Remove um cliente do banco de dados pelo ID.
     * @param id ID do cliente.
     */
    async detele(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}
