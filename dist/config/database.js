"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
var Customer_1 = require("../entities/Customer");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '1234',
    database: 'clientes',
    port: 3306,
    synchronize: false, // Sincroniza automaticamente as entidades com o banco de dados
    logging: false,
    entities: [Customer_1.Customer], // Entidades mapeadas
    subscribers: [],
    migrations: [],
});
