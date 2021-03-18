import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import AppError from '../library/errors/AppError';
import tokenConfig from '../config/tokenConfig';
import { tokenInterface } from '../interface';

export default (req: Request, res: Response, next: NextFunction): void => {
  const header = req.headers.authorization;

  if (!header) throw new AppError('Token is missing', 401);

  const {
    jwt: { secret },
  } = tokenConfig;

  const [, token] = header.split(' ');

  try {
    const decode = verify(token, secret);

    const { sub } = decode as tokenInterface;

    req.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new AppError('Invalid token', 401);
  }
};
