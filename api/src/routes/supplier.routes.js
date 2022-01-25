import { Router } from 'express'
import * as supplierCtrl from '../controller/supplier.controller'
import { verifyToken, isAdmin, isCarga, isControl, isfullAdmin } from '../middlewares/authJwt'

const router = Router()

router.get('/', verifyToken, supplierCtrl.getSuppliers)
router.get('/:supplierId', verifyToken, supplierCtrl.getSupplierById)
router.post('/', verifyToken, supplierCtrl.createSupplier)
router.put('/:supplierId', verifyToken, supplierCtrl.updateSupplierById)
router.delete('/:supplierId', verifyToken, supplierCtrl.deleteSupplierById)

export default router;
