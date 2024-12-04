"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var CustomerRoutes_1 = __importDefault(require("./routes/CustomerRoutes"));
var database_1 = require("./config/database");
var erroHandler_1 = require("./handler/erroHandler");
var port = 3000;
var App = (0, express_1.default)();
App.use(express_1.default.json());
/**
 * Configuração das rotas da API.
 * Todas as rotas estão prefixadas com `/api`.
 */
App.use('/api', CustomerRoutes_1.default);
// Middleware de erros deve ser registrado após as rotas
App.use(erroHandler_1.errorHandler);
/**
 * Inicializa a conexão com o banco de dados e inicia o servidor.
 * Em caso de erro, exibe uma mensagem de erro no console.
 */
database_1.AppDataSource.initialize()
    .then(function () {
    console.log('Connected to database');
    App.listen(port, function () {
        console.log("Server running on http://localhost:".concat(port));
    });
})
    .catch(function (error) {
    console.error('Error on connect to database', error);
});
