import { Router } from 'express'
import * as documentsCtrl from '../controller/documents.controller'

const router = Router()

router.get('/', documentsCtrl.getDocuments)
router.get('/:documentId', documentsCtrl.getDocumentById)
router.post('/', documentsCtrl.createDocument)
router.put('/:documentId', documentsCtrl.updateDocumentById)
router.delete('/:documentId', documentsCtrl.deleteDocumentById)

export default router;