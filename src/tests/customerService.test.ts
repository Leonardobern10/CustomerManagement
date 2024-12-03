import exp from 'constants';
import { AppDataSource } from '../config/database';
import { CustomerService } from '../services/CustomerService';

// Simulando as configurações do banco de dados
// Para que ele tenha o mesmo comportamento do
// original, sem interagir com o originasl
jest.mock('../config/database');

// Identifica o alvo dos testes
describe('Customer Service', () => {
    let customerService: CustomerService;

    const mockRepository = {
        // Esses métodos são comuns em frameworks
        // de ORM e por isso são utilizados como padrao
        // jest.fn() -> cria uma função falsa que imita
        // o comportamento real sem executar lógica
        save: jest.fn(),
        find: jest.fn(),
        findOneBy: jest.fn(),
        delete: jest.fn(),
        update: jest.fn(),
    };

    // Executa uma unica vez antes de todos os testes
    // da suite de testes
    beforeAll(() => {
        // Significa que aonde houver referência para
        // [AppDataSource.getRepository] a partir de agora será
        // chamado o mockRepository que será responsável por
        // simular o comportamento do repositorio.
        (AppDataSource.getRepository as jest.Mock).mockReturnValue(
            mockRepository
        );
        customerService = new CustomerService();
    });

    // Limpa os mocks para evitar interferências
    // entre os testes
    beforeEach(() => {
        jest.clearAllMocks();
    });

    // Primeiro caso de teste
    it('Need to create a customer', async () => {
        // Criação de um objeto simulado que imita um cliente
        // *Ele é o molde do que se espera receber em caso de sucesso
        const mockCustomer = {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
        };

        // * Faz com que quando {save} for chamado
        // * Ele retorne o objeto {mockCustomer} como
        // * se fosse o cliente que foi salvo no bancod e dados
        mockRepository.save.mockResolvedValue(mockCustomer);

        // O método create é chamado
        const result = await customerService.create(
            'John Doe',
            'john@example.com'
        );

        // Verifica se o save foi chamado com um objeto
        // contendo name e email que você passou para
        // o método create.
        expect(mockRepository.save).toHaveBeenCalledWith({
            name: 'John Doe',
            email: 'john@example.com',
        });

        // Verifica se o resultado do método create é igual
        // ao objeto mockCustomer
        expect(result).toEqual(mockCustomer);
    });

    it('Need to return all registers of customers', async () => {
        const mockCustomers = [
            { id: 1, name: 'John Doe', email: 'John@email.com' },
            { id: 2, name: 'John Doe', email: 'John@email.com' },
        ];

        // Determina o que será retornado ao fim da execução
        // do método chamado
        mockRepository.find.mockResolvedValue(mockCustomers);

        const result = await customerService.listAll();

        expect(mockRepository.find).toHaveBeenCalled();
        expect(result).toEqual(mockCustomers);
    });

    it('Need to return the customer through customer id', async () => {
        const mockCustomer = {
            id: 1,
            name: 'John Doe',
            email: 'John@email.com',
        };

        // Determina o que será retornado ao fim do método chamado
        mockRepository.findOneBy.mockResolvedValue(mockCustomer);

        // Armazena o resultado da consulta
        const result = await customerService.listById(
            mockCustomer.id.toString()
        );

        // Verifica se o método está sendo chamado
        // E se recebe os parâmetros corretos
        expect(mockRepository.findOneBy).toHaveBeenCalledWith({ id: '1' });

        // Verifica se o resultado está de acordo com o esperado
        expect(result).toEqual(mockCustomer);
    });

    it('Need to update the customer info', async () => {
        const oldMockCustomer = {
            id: '1',
            name: 'John Doe',
            email: 'john@email.com',
        };

        const newMockCustomer = {
            id: '1',
            name: 'Doe John',
            email: 'John@email.com',
        };

        mockRepository.findOneBy.mockResolvedValue(oldMockCustomer);
        mockRepository.save.mockResolvedValue(newMockCustomer);

        const result = await customerService.update(
            '1',
            'Doe John',
            'John@email.com'
        );

        expect(mockRepository.save).toHaveBeenCalledWith({
            ...oldMockCustomer,
            name: newMockCustomer.name,
            email: newMockCustomer.email,
        });

        expect(result).toEqual(newMockCustomer);
    });

    it('deve excluir um cliente', async () => {
        mockRepository.delete.mockResolvedValue([]);

        await customerService.detele('1');

        expect(mockRepository.delete).toHaveBeenCalledWith('1');
    });
});
