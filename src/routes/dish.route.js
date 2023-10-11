import express from 'express';
import DishController from '../controllers/dish.controller.js';
import { validateMdw } from '../middlewares/validate.mdw.js';
import dishValidator from '../valdationSchema/dish.validator.js';

const router = express();

router.get('/', DishController.getAll);
router.post('/', validateMdw(dishValidator.createSchema), DishController.create);
router.put('/:id', validateMdw(dishValidator.createSchema), DishController.update);
router.delete('/:id', DishController.deleteOne);

export default router;
