"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
var Customer_1 = require("../entities/Customer");
// Configurações do banco de dados
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
    synchronize: false, // Sincroniza automaticamente as entidades com o banco de dados
    logging: false,
    entities: [Customer_1.Customer], // Entidades mapeadas
    subscribers: [],
    migrations: [],
});
