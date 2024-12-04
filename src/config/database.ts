import { DataSource } from 'typeorm';
import { Customer } from '../entities/Customer';

// Configurações do banco de dados
export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
    synchronize: false, // Sincroniza automaticamente as entidades com o banco de dados
    logging: false,
    entities: [Customer], // Entidades mapeadas
    subscribers: [],
    migrations: [],
});
