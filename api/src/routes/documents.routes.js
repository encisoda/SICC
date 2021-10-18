import { Router } from 'express'
import * as documentsCtrl from '../controller/documents.controller'
import { authJwt } from "../middlewares";

const router = Router()

router.get('/', [authJwt.verifyToken, authJwt.isModerator], documentsCtrl.getDocuments)
router.get('/:documentId', documentsCtrl.getDocumentById)
router.post('/', authJwt.verifyToken, documentsCtrl.createDocument)
router.put('/:documentId', documentsCtrl.updateDocumentById)
router.delete('/:documentId', documentsCtrl.deleteDocumentById)

export default router;