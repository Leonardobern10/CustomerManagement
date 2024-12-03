import { CustomerController } from '../controllers/CustomerController';
import { Router } from 'express';

const router = Router();
const controller = new CustomerController();

router.post('/customers', controller.insert);
router.get('/customers', controller.getAll);
router.get('/customers/:id', controller.getId);
router.put('/customers/:id', controller.updateCustomer);
router.delete('/customers/:id', controller.deleteCustomer);

export default router;
