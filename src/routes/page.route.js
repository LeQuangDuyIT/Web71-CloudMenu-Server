import express from 'express';
import { validateMdw } from '../middlewares/validate.mdw.js';
import pageSchema from '../valdationSchema/page.validator.js';
import PageController from '../controllers/page.controller.js';

const router = express.Router();

router.get('/', PageController.getALLPages);
router.get('/:id', PageController.getPageById);
router.post('/', validateMdw(pageSchema), PageController.createPage);
router.delete('/:id', PageController.deletePage);
router.put('/:id', validateMdw(pageSchema), PageController.updatePage);

export default router