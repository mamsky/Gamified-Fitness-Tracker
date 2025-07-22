import { Response } from 'express';

export const sendErrorResponse = (
  res: Response,
  message: string,
  statusCode: number,
) => {
  res.status(statusCode).json({ message });
};

export const sendSuccessResponse = <T>(
  res: Response,
  message: string,
  data?: T,
  statusCode: number = 200,
) => {
  if (data !== undefined && data !== null) {
    return res.status(statusCode).json({
      message,
      data,
    });
  }

  res.status(statusCode).json({
    message,
  });
};
