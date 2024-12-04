"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
var database_1 = require("../config/database");
var Customer_1 = require("../entities/Customer");
var CustomerNotFoundException_1 = require("../exceptions/CustomerNotFoundException");
var DatabaseExceptions_1 = require("../exceptions/DatabaseExceptions");
/**
 * Serviço responsável por gerenciar as operações relacionadas aos clientes.
 * Inclui métodos para criar, listar, buscar por ID, atualizar e excluir clientes.
 */
var CustomerService = /** @class */ (function () {
    function CustomerService() {
        this.repository = database_1.AppDataSource.getRepository(Customer_1.Customer);
    }
    /**
     * Cria um novo cliente no banco de dados.
     * @param name Nome do cliente.
     * @param email Email do cliente.
     * @returns O cliente recém-criado.
     * @throws DatabaseException Em caso de falha ao salvar no banco.
     */
    CustomerService.prototype.create = function (name, email) {
        return __awaiter(this, void 0, void 0, function () {
            var newCustomer, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        newCustomer = new Customer_1.Customer();
                        newCustomer.name = name;
                        newCustomer.email = email;
                        return [4 /*yield*/, this.repository.save(newCustomer)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_1 = _a.sent();
                        throw new DatabaseExceptions_1.DatabaseException('Failed to create a new customer.');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Lista todos os clientes cadastrados no banco de dados.
     * @returns Uma lista de clientes.
     * @throws DatabaseException Em caso de falha na operação do banco.
     */
    CustomerService.prototype.listAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repository.find()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_2 = _a.sent();
                        throw new DatabaseExceptions_1.DatabaseException('Failed to fetch customer list.');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Busca um cliente no banco de dados pelo ID.
     * @param id ID do cliente.
     * @returns O cliente encontrado.
     * @throws CustomerNotFoundException Se o cliente não existir.
     * @throws DatabaseException Em caso de falha no banco.
     */
    CustomerService.prototype.listById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var customer, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repository.findOneBy({ id: id })];
                    case 1:
                        customer = _a.sent();
                        if (!customer) {
                            throw new CustomerNotFoundException_1.CustomerNotFoundException("Customer with ID ".concat(id, " not found."));
                        }
                        return [2 /*return*/, customer];
                    case 2:
                        error_3 = _a.sent();
                        if (error_3 instanceof CustomerNotFoundException_1.CustomerNotFoundException) {
                            throw error_3;
                        }
                        throw new DatabaseExceptions_1.DatabaseException('Failed to fetch customer by ID.');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Atualiza os dados de um cliente existente.
     * @param id ID do cliente.
     * @param name Novo nome do cliente.
     * @param email Novo email do cliente.
     * @returns O cliente atualizado.
     * @throws CustomerNotFoundException Se o cliente não existir.
     * @throws DatabaseException Em caso de falha na atualização.
     */
    CustomerService.prototype.update = function (id, name, email) {
        return __awaiter(this, void 0, void 0, function () {
            var customer, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.listById(id)];
                    case 1:
                        customer = _a.sent();
                        customer.name = name;
                        customer.email = email;
                        return [4 /*yield*/, this.repository.save(customer)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        error_4 = _a.sent();
                        if (error_4 instanceof CustomerNotFoundException_1.CustomerNotFoundException) {
                            throw error_4;
                        }
                        throw new DatabaseExceptions_1.DatabaseException('Failed to update customer.');
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Remove um cliente do banco de dados pelo ID.
     * @param id ID do cliente.
     * @throws CustomerNotFoundException Se o cliente não existir.
     * @throws DatabaseException Em caso de falha na exclusão.
     */
    CustomerService.prototype.detele = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repository.delete(id)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        if (error_5 instanceof CustomerNotFoundException_1.CustomerNotFoundException) {
                            throw error_5;
                        }
                        throw new DatabaseExceptions_1.DatabaseException('Failed to delete customer.');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return CustomerService;
}());
exports.CustomerService = CustomerService;
