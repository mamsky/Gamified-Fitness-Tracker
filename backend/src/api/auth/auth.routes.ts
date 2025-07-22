import express from 'express';
import { AuthController } from './auth.controller';
const authRouter = express.Router();

authRouter.post('/register', AuthController.registerUser);
authRouter.post('/login', AuthController.authLogin);

export default authRouter;
