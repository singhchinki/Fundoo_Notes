import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { resetAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to create a new user
router.post('', newUserValidator, userController.newUser);

//route to check login credentials
router.post('/login',userController.getLogin);

//route to forget password credentials
router.post('/forgetpassword',userController.forgetPassword);


//route to reset password credentials
router.put('/resetpassword/:token',resetAuth,userController.resetPassword);

export default router;
