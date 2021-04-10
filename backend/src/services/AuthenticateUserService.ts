import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User from '../models/User';
import { userInterface, UserWithToken } from '../interface';
import AppError from '../library/errors/AppError';
import tokenConfig from '../config/tokenConfig';

class AuthenticateUserService {
  public async execute({ email, password }: userInterface): Promise<UserWithToken> {
    const usersRepository = getRepository(User);

    const appError = new AppError('Invalid credentials', 401);

    const isUserValid = await usersRepository.findOne({ where: { email } });
    if (!isUserValid) throw appError;

    const passwordMatched = await compare(password, isUserValid.password);
    if (!passwordMatched) throw appError;

    const {
      jwt: { secret, expiresIn },
    } = tokenConfig;

    const token = sign({}, secret, {
      subject: isUserValid.id,
      expiresIn,
    });

    return {
      id: isUserValid.id,
      token,
    };
  }
}

export default AuthenticateUserService;
