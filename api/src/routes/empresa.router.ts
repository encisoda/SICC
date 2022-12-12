import { getEmpresas } from './../controllers/empresa.controller';
import { Router } from 'express';
import validateToken from '../middlewares/validate-token';

const router = Router();

router.get('/' , validateToken, getEmpresas)

export default router;

