import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import tokenConfig from '../config/tokenConfig';
import { tokenInterface } from '../interface';

export default (req: Request, res: Response, next: NextFunction): void => {
  const header = req.headers.authorization;

  if (!header) throw new Error('Token is missing');

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
    throw new Error('Invalid token');
  }
};
