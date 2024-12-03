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
var CustomerController_1 = require("../controllers/CustomerController");
var CustomerService_1 = require("../services/CustomerService");
jest.mock('../services/CustomerService');
describe('CustomerController', function () {
    var customerController;
    var customerService;
    var mockReq = {};
    var mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
    };
    beforeAll(function () {
        customerService = new CustomerService_1.CustomerService();
        customerController = new CustomerController_1.CustomerController();
    });
    beforeEach(function () {
        jest.clearAllMocks();
    });
    it('deve criar um cliente', function () { return __awaiter(void 0, void 0, void 0, function () {
        var mockCustomer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mockCustomer = {
                        id: '1',
                        name: 'John Doe',
                        email: 'John@email.com',
                    };
                    customerService.create.mockResolvedValue(mockCustomer);
                    mockReq.body = {
                        name: 'John Doe',
                        email: 'john@example.com',
                    };
                    return [4 /*yield*/, customerController.insert(mockReq, mockRes)];
                case 1:
                    _a.sent();
                    expect(customerService.create).toHaveBeenCalledWith('John Doe', 'john@example.com');
                    expect(mockRes.status).toHaveBeenCalledWith(201);
                    expect(mockRes.json).toHaveBeenCalledWith(mockCustomer);
                    return [2 /*return*/];
            }
        });
    }); });
    it('deve listar todos os clientes', function () { return __awaiter(void 0, void 0, void 0, function () {
        var mockCustomers;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mockCustomers = [
                        { id: '1', name: 'John Doe', email: 'john@email.com' },
                    ];
                    customerService.listAll.mockResolvedValue(mockCustomers);
                    return [4 /*yield*/, customerController.getAll(mockReq, mockRes)];
                case 1:
                    _a.sent();
                    expect(customerService.listAll).toHaveBeenCalled();
                    expect(mockRes.status).toHaveBeenCalledWith(200);
                    expect(mockRes.json).toHaveBeenCalledWith(mockCustomers);
                    return [2 /*return*/];
            }
        });
    }); });
    it('deve retornar erro ao buscar cliente inexistente', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    customerService.listById.mockResolvedValue(null);
                    mockReq.params = { id: '99' };
                    return [4 /*yield*/, customerController.getId(mockReq, mockRes)];
                case 1:
                    _a.sent();
                    expect(customerService.listById).toHaveBeenCalledWith(99);
                    expect(mockRes.status).toHaveBeenCalledWith(404);
                    expect(mockRes.json).toHaveBeenCalledWith({
                        message: 'Cliente não encontrado',
                    });
                    return [2 /*return*/];
            }
        });
    }); });
});
