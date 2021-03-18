import { Router } from 'express';
import multer from 'multer';

import CreateUser from '../services/CreateUserService';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';
import authMiddleware from '../middlewares/authMiddleware';
import { fileUpload } from '../config/fileUpload';

const usersRouter = Router();
const upload = multer(fileUpload);

usersRouter.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  const createUser = new CreateUser();
  const userCreated = await createUser.execute({ name, email, password });

  return res.status(201).send(userCreated);
});

usersRouter.patch('/avatar', authMiddleware, upload.single('avatar'), async (req, res) => {
  const {
    user: { id },
    file: { filename },
  } = req;

  const userWithAvatar = new UpdateUserAvatarService();
  const userUpdated = await userWithAvatar.execute({
    user_id: id,
    avatarFilename: filename,
  });

  return res.json(userUpdated);
});

export default usersRouter;
