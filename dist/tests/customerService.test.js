"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var database_1 = require("../config/database");
var CustomerService_1 = require("../services/CustomerService");
// Simulando as configurações do banco de dados
// Para que ele tenha o mesmo comportamento do
// original, sem interagir com o originasl
jest.mock('../config/database');
// Identifica o alvo dos testes
describe('Customer Service', function () {
    var customerService;
    var mockRepository = {
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
    beforeAll(function () {
        // Significa que aonde houver referência para
        // [AppDataSource.getRepository] a partir de agora será
        // chamado o mockRepository que será responsável por
        // simular o comportamento do repositorio.
        database_1.AppDataSource.getRepository.mockReturnValue(mockRepository);
        customerService = new CustomerService_1.CustomerService();
    });
    // Limpa os mocks para evitar interferências
    // entre os testes
    beforeEach(function () {
        jest.clearAllMocks();
    });
    // Primeiro caso de teste
    it('Need to create a customer', function () { return __awaiter(void 0, void 0, void 0, function () {
        var mockCustomer, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mockCustomer = {
                        id: 1,
                        name: 'John Doe',
                        email: 'john@example.com',
                    };
                    // * Faz com que quando {save} for chamado
                    // * Ele retorne o objeto {mockCustomer} como
                    // * se fosse o cliente que foi salvo no bancod e dados
                    mockRepository.save.mockResolvedValue(mockCustomer);
                    return [4 /*yield*/, customerService.create('John Doe', 'john@example.com')];
                case 1:
                    result = _a.sent();
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
                    return [2 /*return*/];
            }
        });
    }); });
    it('Need to return all registers of customers', function () { return __awaiter(void 0, void 0, void 0, function () {
        var mockCustomers, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mockCustomers = [
                        { id: 1, name: 'John Doe', email: 'John@email.com' },
                        { id: 2, name: 'John Doe', email: 'John@email.com' },
                    ];
                    // Determina o que será retornado ao fim da execução
                    // do método chamado
                    mockRepository.find.mockResolvedValue(mockCustomers);
                    return [4 /*yield*/, customerService.listAll()];
                case 1:
                    result = _a.sent();
                    expect(mockRepository.find).toHaveBeenCalled();
                    expect(result).toEqual(mockCustomers);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Need to return the customer through customer id', function () { return __awaiter(void 0, void 0, void 0, function () {
        var mockCustomer, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mockCustomer = {
                        id: 1,
                        name: 'John Doe',
                        email: 'John@email.com',
                    };
                    // Determina o que será retornado ao fim do método chamado
                    mockRepository.findOneBy.mockResolvedValue(mockCustomer);
                    return [4 /*yield*/, customerService.listById(mockCustomer.id.toString())];
                case 1:
                    result = _a.sent();
                    // Verifica se o método está sendo chamado
                    // E se recebe os parâmetros corretos
                    expect(mockRepository.findOneBy).toHaveBeenCalledWith({ id: '1' });
                    // Verifica se o resultado está de acordo com o esperado
                    expect(result).toEqual(mockCustomer);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Need to update the customer info', function () { return __awaiter(void 0, void 0, void 0, function () {
        var oldMockCustomer, newMockCustomer, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    oldMockCustomer = {
                        id: '1',
                        name: 'John Doe',
                        email: 'john@email.com',
                    };
                    newMockCustomer = {
                        id: '1',
                        name: 'Doe John',
                        email: 'John@email.com',
                    };
                    mockRepository.findOneBy.mockResolvedValue(oldMockCustomer);
                    mockRepository.save.mockResolvedValue(newMockCustomer);
                    return [4 /*yield*/, customerService.update('1', 'Doe John', 'John@email.com')];
                case 1:
                    result = _a.sent();
                    expect(mockRepository.save).toHaveBeenCalledWith(__assign(__assign({}, oldMockCustomer), { name: newMockCustomer.name, email: newMockCustomer.email }));
                    expect(result).toEqual(newMockCustomer);
                    return [2 /*return*/];
            }
        });
    }); });
    it('deve excluir um cliente', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mockRepository.delete.mockResolvedValue([]);
                    return [4 /*yield*/, customerService.detele('1')];
                case 1:
                    _a.sent();
                    expect(mockRepository.delete).toHaveBeenCalledWith('1');
                    return [2 /*return*/];
            }
        });
    }); });
});
