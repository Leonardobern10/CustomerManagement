# Customer Management API

Esta é uma API para gerenciar clientes, construída com **Node.js**, **Express**, e **TypeORM**. Ela permite realizar operações CRUD (Criar, Ler, Atualizar, Excluir) para manipulação de dados de clientes, utilizando um banco de dados MySQL.

## Funcionalidades

- **Cadastrar cliente**: Permite adicionar um novo cliente com informações de nome e e-mail.
- **Listar todos os clientes**: Exibe uma lista de todos os clientes cadastrados.
- **Buscar cliente por ID**: Permite buscar um cliente específico pelo seu ID.
- **Atualizar cliente**: Atualiza as informações de um cliente existente.
- **Excluir cliente**: Remove um cliente do banco de dados.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **Express**: Framework web para Node.js, usado para construir a API.
- **TypeORM**: ORM (Object-Relational Mapper) para facilitar a interação com o banco de dados.
- **MySQL**: Banco de dados relacional utilizado para armazenar as informações dos clientes.

## Instalação

### Pré-requisitos

- Node.js instalado. Você pode fazer o download e instalação do Node.js [aqui](https://nodejs.org/).
- Banco de dados MySQL configurado.

### Passos para executar o projeto:

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/seu-usuario/customer-management-api.git
    cd customer-management-api
    ```

2. **Instale as dependências**:
    ```bash
    npm install
    ```

3. **Configure o banco de dados**:
   - Crie um banco de dados MySQL chamado `clientes`.
   - Atualize as configurações do banco no arquivo `src/config/database.ts` (se necessário).
   
4. **Inicie o servidor**:
    ```bash
    npm run dev
    ```

    O servidor estará disponível em `http://localhost:3000`.

## Endpoints da API

### 1. **Criar Cliente**
   - **Método**: `POST`
   - **Endpoint**: `/api/customers`
   - **Corpo da requisição**:
     ```json
     {
       "name": "John Doe",
       "email": "john@example.com"
     }
     ```
   - **Resposta**:
     - **Código 201**: Cliente criado com sucesso.
     ```json
     {
       "id": 1,
       "name": "John Doe",
       "email": "john@example.com"
     }
     ```
     - **Código 500**: Erro ao criar cliente.

### 2. **Listar Todos os Clientes**
   - **Método**: `GET`
   - **Endpoint**: `/api/customers`
   - **Resposta**:
     - **Código 200**: Lista de todos os clientes.
     ```json
     [
       {
         "id": 1,
         "name": "John Doe",
         "email": "john@example.com"
       }
     ]
     ```

### 3. **Buscar Cliente por ID**
   - **Método**: `GET`
   - **Endpoint**: `/api/customers/:id`
   - **Resposta**:
     - **Código 200**: Cliente encontrado.
     ```json
     {
       "id": 1,
       "name": "John Doe",
       "email": "john@example.com"
     }
     ```
     - **Código 404**: Cliente não encontrado.

### 4. **Atualizar Cliente**
   - **Método**: `PUT`
   - **Endpoint**: `/api/customers/:id`
   - **Corpo da requisição**:
     ```json
     {
       "name": "Doe John",
       "email": "doe@example.com"
     }
     ```
   - **Resposta**:
     - **Código 200**: Cliente atualizado com sucesso.
     - **Código 404**: Cliente não encontrado.
     - **Código 500**: Erro ao atualizar cliente.

### 5. **Excluir Cliente**
   - **Método**: `DELETE`
   - **Endpoint**: `/api/customers/:id`
   - **Resposta**:
     - **Código 200**: Cliente excluído com sucesso.
     - **Código 500**: Erro ao excluir cliente.

## Estrutura do Projeto

```
├── src
│   ├── config
│   │   └── database.ts      # Configuração do banco de dados
│   ├── controllers
│   │   └── CustomerController.ts  # Controlador para gerenciar os clientes
│   ├── entities
│   │   └── Customer.ts      # Entidade do cliente mapeada para o banco de dados
│   ├── routes
│   │   └── CustomerRoutes.ts      # Rotas da API
│   ├── services
│   │   └── CustomerService.ts     # Lógica de negócios relacionada aos clientes
│   ├── app.ts               # Configuração do servidor Express
│   └── database.ts          # Conexão do TypeORM com o banco de dados
├── .gitignore               # Arquivos para serem ignorados pelo Git
├── package.json             # Dependências e scripts do projeto
└── tsconfig.json            # Configuração do TypeScript
```

## Contribuição

1. Faça o **fork** do projeto.
2. Crie uma branch para a sua modificação (`git checkout -b minha-modificacao`).
3. Faça commit das suas alterações (`git commit -am 'Adicionando nova funcionalidade'`).
4. Envie para o repositório remoto (`git push origin minha-modificacao`).
5. Abra um **Pull Request** explicando suas alterações.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
