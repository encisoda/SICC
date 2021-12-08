import { Router } from 'express'
import * as documentsCtrl from '../controller/documents.controller'
import { verifyToken, isAdmin, isCarga, isControl, isfullAdmin } from '../middlewares/authJwt';


const router = Router()

router.get('/', verifyToken, isfullAdmin || isAdmin, documentsCtrl.getDocuments)
router.get('/:documentId', verifyToken, documentsCtrl.getDocumentById)
router.get('/:documentByCompany', verifyToken, documentsCtrl.getDocumentByCompany)
router.post('/', verifyToken, documentsCtrl.createDocument)
router.put('/:documentId', verifyToken, documentsCtrl.updateDocumentById)
router.delete('/:documentId', verifyToken, documentsCtrl.deleteDocumentById)

export default router;