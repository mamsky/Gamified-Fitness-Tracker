import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import { AuthDTO, createAuthDTO, registerSchema } from './auth.model';
import { authService } from './auth.service';
import jwt from 'jsonwebtoken';

class authController {
  async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const body = await createAuthDTO.validateAsync(req.body);

      const existingUser = await authService.findByEmail(body.email);
      if (existingUser) {
        res
          .status(409)
          .json({ message: 'Email already exists, please use another email.' });
        return;
      }

      const hashedPassword = await bcrypt.hash(body.password, 10);
      const data: registerSchema = {
        ...body,
        password: hashedPassword,
      };

      const createdUser = await authService.createAuth(data);
      res
        .status(200)
        .json({ message: 'User created successfully', data: createdUser });
    } catch (error) {
      next(error);
    }
  }
  async authLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const jwtSecretKey = process.env.JWT_SECRET_KEY || '';
      const { email, password } = await AuthDTO.validateAsync(req.body);

      const sendErrorResponse = (message: string) => {
        res.status(404).json({ message });
        return;
      };

      const user = await authService.findByEmail(email);
      if (!user) return sendErrorResponse('Wrong Email or Password');

      const isPasswordValid = await bcrypt.compare(
        password,
        user.password_hash,
      );

      if (!isPasswordValid) return sendErrorResponse('Wrong Email or Password');

      const token = jwt.sign({ userId: user.id }, jwtSecretKey, {
        expiresIn: '1d',
      });

      res.status(200).json({
        token,
      });
    } catch (error) {
      next(error);
    }
  }
}

export const AuthController = new authController();
