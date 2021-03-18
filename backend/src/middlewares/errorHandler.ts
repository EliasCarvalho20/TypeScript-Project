import { Request, Response, NextFunction } from 'express';

import AppError from '../library/errors/AppError';

export default (err: Error, req: Request, res: Response, _: NextFunction): Response => {
  const { message, statusCode } = err || undefined;

  if (err instanceof AppError) return res.sendStatus(statusCode).json(message);

  return res.sendStatus(500).json({ message: 'Internal Server Error' });
};
