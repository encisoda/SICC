import { Router } from "express";
import * as usersCtrl from "../controller/user.controller";
import { authJwt, verifySignup } from "../middlewares";
import { verifyToken, isAdmin, isCarga, isControl, isfullAdmin } from "../middlewares/authJwt";

const router = Router();

router.post(
  "/",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.checkDuplicateUsernameOrEmail,
  ],
  usersCtrl.createUser
)
router.get('/', verifyToken, usersCtrl.getUsers)
router.get('/:userId', verifyToken, usersCtrl.getUser)
router.put('/:userId', verifyToken, usersCtrl.updateUserById)
router.delete('/:userId', verifyToken, usersCtrl.deleteUserById)

export default router;