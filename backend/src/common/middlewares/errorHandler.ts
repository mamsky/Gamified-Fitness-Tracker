import { Prisma } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export interface AppError extends Error {
  status?: number;
}

export const errorHandler = (
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.log(err);

  if (err instanceof Joi.ValidationError) {
    console.log(err);

    res.status(400).json({
      message: err.details[0].message,
    });
    return;
  }

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    const { message } = err;
    res.status(400).json({
      message: message || 'Terjadi kesalahan pada database.',
    });
    return;
  }
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
  });
};
