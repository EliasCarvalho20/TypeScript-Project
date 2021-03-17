import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User from '../models/User';
import { userInterface } from '../interface';
import tokenConfig from '../config/tokenConfig';

class AuthenticateUserService {
  public async execute({ email, password }: userInterface): Promise<string> {
    const usersRepository = getRepository(User);

    const isUserValid = await usersRepository.findOne({ where: { email } });
    if (!isUserValid) throw new Error('Invalid credentials');

    const passwordMatched = await compare(password, isUserValid.password);
    if (!passwordMatched) throw new Error('Invalid credentials');

    const {
      jwt: { secret, expiresIn },
    } = tokenConfig;

    return sign({}, secret, {
      subject: isUserValid.id,
      expiresIn,
    });
  }
}

export default AuthenticateUserService;
