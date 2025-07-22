import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import { AuthDTO, createAuthDTO, registerSchema } from './auth.model';
import { authService } from './auth.service';
import jwt from 'jsonwebtoken';
import {
  sendErrorResponse,
  sendSuccessResponse,
} from '../../common/utils/statusResponse';

class authController {
  async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const body = await createAuthDTO.validateAsync(req.body);

      const existingUser = await authService.findByEmail(body.email);

      if (existingUser)
        return sendErrorResponse(
          res,
          'Email already exists, please use another email.',
          409,
        );

      const hashedPassword = await bcrypt.hash(body.password, 10);
      const data: registerSchema = {
        ...body,
        password: hashedPassword,
      };

      await authService.createAuth(data);
      sendSuccessResponse(res, 'Login successful');
    } catch (error) {
      next(error);
    }
  }
  async authLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const jwtSecretKey = process.env.JWT_SECRET_KEY || '';
      const { email, password } = await AuthDTO.validateAsync(req.body);

      const user = await authService.findByEmail(email);
      if (!user) return sendErrorResponse(res, 'Wrong Email or Password', 404);

      const isPasswordValid = await bcrypt.compare(
        password,
        user.password_hash,
      );

      if (!isPasswordValid)
        return sendErrorResponse(res, 'Wrong Email or Password', 404);

      const token = jwt.sign({ id: user.id }, jwtSecretKey, {
        expiresIn: '1d',
      });

      sendSuccessResponse(res, 'Login successful', { token });
    } catch (error) {
      next(error);
    }
  }
}

export const AuthController = new authController();
