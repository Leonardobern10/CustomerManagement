import { AppDataSource } from '../config/database';
import { Customer } from '../entities/Customer';
import { CustomerNotFoundException } from '../exceptions/CustomerNotFoundException';
import { DatabaseException } from '../exceptions/DatabaseExceptions';
import { ParamsRequiredAreNull } from '../validations/ParamsRequiredAreNull';
import { CustomerExists } from '../validations/CustomerExists';
import { ParamsIsNullException } from '../exceptions/ParamsIsNullException';

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
     * @throws DatabaseException Em caso de falha ao salvar no banco.
     */
    async create(name: string, email: string): Promise<Customer> {
        try {
            const newCustomer = new Customer();
            newCustomer.name = name;
            newCustomer.email = email;
            (await newCustomer.listProps()).forEach((element) => {
                ParamsRequiredAreNull.validate(element);
            });

            return await this.repository.save(newCustomer);
        } catch (error: any) {
            if (error instanceof ParamsIsNullException) {
                throw new ParamsIsNullException();
            }
            throw new DatabaseException(error);
        }
    }

    /**
     * Lista todos os clientes cadastrados no banco de dados.
     * @returns Uma lista de clientes.
     * @throws DatabaseException Em caso de falha na operação do banco.
     */
    async listAll(): Promise<Customer[]> {
        try {
            return await this.repository.find();
        } catch (error: any) {
            throw new DatabaseException(error);
        }
    }

    /**
     * Busca um cliente no banco de dados pelo ID.
     * @param id ID do cliente.
     * @returns O cliente encontrado.
     * @throws CustomerNotFoundException Se o cliente não existir.
     * @throws DatabaseException Em caso de falha no banco.
     */
    async listById(id: string): Promise<Customer> {
        try {
            ParamsRequiredAreNull.validate(id);
            const customer = await this.repository.findOneBy({ id });
            CustomerExists.validate(customer);
            return customer!;
        } catch (error: any) {
            if (error instanceof CustomerNotFoundException) {
                throw error;
            }
            if (error instanceof ParamsIsNullException) {
                throw error;
            }
            throw new DatabaseException('Failed to fetch customer by ID.');
        }
    }

    /**
     * Atualiza os dados de um cliente existente.
     * @param id ID do cliente.
     * @param name Novo nome do cliente.
     * @param email Novo email do cliente.
     * @returns O cliente atualizado.
     * @throws CustomerNotFoundException Se o cliente não existir.
     * @throws DatabaseException Em caso de falha na atualização.
     */
    async update(
        id: string,
        name: string,
        email: string
    ): Promise<Customer | null> {
        try {
            ParamsRequiredAreNull.validate(id);
            const customer = await this.listById(id);
            CustomerExists.validate(customer);
            customer!.name = name;
            customer!.email = email;
            return await this.repository.save(customer!);
        } catch (error: any) {
            if (error instanceof CustomerNotFoundException) {
                throw error;
            }
            if (error instanceof ParamsIsNullException) {
                throw error;
            }
            throw new DatabaseException('Failed to update customer.');
        }
    }

    /**
     * Remove um cliente do banco de dados pelo ID.
     * @param id ID do cliente.
     * @throws CustomerNotFoundException Se o cliente não existir.
     * @throws DatabaseException Em caso de falha na exclusão.
     */
    async detele(id: string): Promise<void> {
        try {
            ParamsRequiredAreNull.validate(id);
            await this.repository.delete(id);
        } catch (error: any) {
            if (error instanceof CustomerNotFoundException) {
                throw error;
            }
            throw new DatabaseException('Failed to delete customer.');
        }
    }
}
