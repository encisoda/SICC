import { Router } from 'express'
import * as personsCtrl from '../controller/person.controller'
import { verifyToken, isAdmin, isCarga, isControl, isfullAdmin } from '../middlewares/authJwt';

const router = Router()

router.post('/', verifyToken, isfullAdmin || isAdmin, personsCtrl.createPerson)

export default router;