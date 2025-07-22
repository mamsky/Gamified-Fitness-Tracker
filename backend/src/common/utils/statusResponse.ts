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
  response?: T,
  statusCode: number = 200,
) => {
  if (response !== undefined && response !== null) {
    return res.status(statusCode).json({
      message,
      response,
    });
  }

  res.status(statusCode).json({
    message,
  });
};
