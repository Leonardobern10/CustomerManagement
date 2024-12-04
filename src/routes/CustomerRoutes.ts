import { errorHandler } from '../handler/erroHandler';
import { CustomerController } from '../controllers/CustomerController';
import { Router } from 'express';

const router = Router();
const controller = new CustomerController();

/**
 * Rotas relacionadas aos clientes.
 * Define as rotas para criação, listagem, busca por ID, atualização e exclusão de clientes.
 */
router.post('/customers', controller.insert);
router.get('/customers', controller.getAll);
router.get('/customers/:id', controller.getId);
router.put('/customers/:id', controller.updateCustomer);
router.delete('/customers/:id', controller.deleteCustomer);

export default router;
