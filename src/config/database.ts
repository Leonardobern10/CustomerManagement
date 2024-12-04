import { DataSource } from 'typeorm';
import { Customer } from '../entities/Customer';

// Configurações do banco de dados
export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '1234',
    database: 'clientes',
    port: 3306,
    synchronize: false, // Sincroniza automaticamente as entidades com o banco de dados
    logging: false,
    entities: [Customer], // Entidades mapeadas
    subscribers: [],
    migrations: [],
});
