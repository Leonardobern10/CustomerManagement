"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var CustomerRoutes_1 = __importDefault(require("./routes/CustomerRoutes"));
var database_1 = require("./config/database");
var port = 3000;
var App = (0, express_1.default)();
App.use(express_1.default.json());
App.use('/api', CustomerRoutes_1.default);
database_1.AppDataSource.initialize()
    .then(function () {
    console.log('Banco de dados conectado!');
    App.listen(port, function () {
        console.log("Server running on http://localhost:".concat(port));
    });
})
    .catch(function (error) {
    console.error('Erro ao se conectar ao banco de dados', error);
});
