import {Router} from 'express'
import * as filesCtrl from '../controllers/files.controllers'

const router = Router()

router.post('/', filesCtrl.createFile)

router.get('/', filesCtrl.getFiles)

router.get('/:fileId', filesCtrl.getFileById)

router.put('/:fileId', filesCtrl.updateFileById)

router.delete('/:fileId', filesCtrl.deleteFileById)

export default router;