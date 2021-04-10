import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const usersRouter = Router();

usersRouter.post('/', async (req, res) => {
  const { email, password } = req.body;

  const authService = new AuthenticateUserService();
  const userWithToken = await authService.execute({ email, password });

  return res.status(201).json({ user: userWithToken });
});

export default usersRouter;
