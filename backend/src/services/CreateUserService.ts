import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/User';
import { userInterface, userWithoutPass } from '../interface';
import AppError from '../library/errors/AppError';

class CreateUser {
  public async execute({ name, email, password }: userInterface): Promise<userWithoutPass> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({ where: { email } });

    if (checkUserExists) {
      throw new AppError('Email address already in use', 409);
    }

    const hashedPassword = await hash(password, 16);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}

export default CreateUser;
