"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomerController_1 = require("../controllers/CustomerController");
var express_1 = require("express");
var router = (0, express_1.Router)();
var controller = new CustomerController_1.CustomerController();
/**
 * Rotas relacionadas aos clientes.
 * Define as rotas para criação, listagem, busca por ID, atualização e exclusão de clientes.
 */
router.post('/customers', controller.insert);
router.get('/customers', controller.getAll);
router.get('/customers/:id', controller.getId);
router.put('/customers/:id', controller.updateCustomer);
router.delete('/customers/:id', controller.deleteCustomer);
exports.default = router;
