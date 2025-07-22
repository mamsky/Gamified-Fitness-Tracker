import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { sendErrorResponse } from '../utils/statusResponse';

export const authCheck = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorizationHeader = req.headers['authorization'];

    if (!authorizationHeader) {
      return sendErrorResponse(res, 'Authorization header is missing', 400);
    }

    const [_bearer, token] = authorizationHeader.split(' ');

    if (!token) {
      return sendErrorResponse(res, 'Token is missing', 400);
    }

    const jwtSecretKey = process.env.JWT_SECRET_KEY;

    if (!jwtSecretKey) {
      return sendErrorResponse(res, 'JWT secret key is not defined', 500);
    }

    const decodedToken = jwt.verify(token, jwtSecretKey);

    (req as any).user = decodedToken;
    next();
  } catch (error) {
    return sendErrorResponse(res, 'Unauthorized!', 401);
  }
};
