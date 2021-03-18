import fs from 'fs';
import path from 'path';
import { getRepository } from 'typeorm';

import User from '../models/User';
import { userAvatar, userWithoutPass } from '../interface';
import AppError from '../library/errors/AppError';
import { tempFolder } from '../config/fileUpload';

class UpdateUserAvatarService {
  public async execute({ user_id, avatarFilename }: userAvatar): Promise<userWithoutPass> {
    const usersRepository = getRepository(User);
    const user = await usersRepository.findOne(user_id);

    if (!user) throw new AppError('Only logged-in users are allowed to change avatars', 401);

    if (user.avatar) {
      const userAvatarPath = path.join(tempFolder, user.avatar);
      const userAvatarFileExists = await fs.promises.stat(userAvatarPath);

      if (userAvatarFileExists) await fs.promises.unlink(userAvatarPath);
    }

    const { password: _, ...userWithoutPassword } = user;

    userWithoutPassword.avatar = avatarFilename;
    await usersRepository.save(userWithoutPassword);

    return userWithoutPassword;
  }
}

export default UpdateUserAvatarService;
