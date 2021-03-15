import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/User';
import { userInterface } from '../interface';

class CreateUser {
  public async execute({ name, email, password }: userInterface): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({ where: { email } });

    if (checkUserExists) {
      throw new Error('Email address already in use');
    }

    const hashedPassword = await hash(password, 16);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUser;
