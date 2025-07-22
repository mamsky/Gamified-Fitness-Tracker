import express from 'express';
import { AuthController } from './auth.controller';
const authRouter = express.Router();

authRouter.post('/register', AuthController.registerUser);

export default authRouter;
