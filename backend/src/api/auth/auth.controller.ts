import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import { createAuthDTO, registerSchema } from './auth.model';
import { authService } from './auth.service';

class authController {
  async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const body = await createAuthDTO.validateAsync(req.body);

      const checkEmail = await authService.findByEmail(body.email);
      if (checkEmail) {
        res
          .status(409)
          .json({ message: 'Email already exists, please use another email.' });
        return;
      }

      const passwordHash = await bcrypt.hash(body.password_hash, 10);

      const data: registerSchema = {
        ...body,
        password_hash: passwordHash,
      };

      const createUser = await authService.createAuth(data);
      res
        .status(200)
        .json({ message: 'create user successfully', data: createUser });
    } catch (error) {
      next(error);
    }
  }
}

export const AuthController = new authController();
