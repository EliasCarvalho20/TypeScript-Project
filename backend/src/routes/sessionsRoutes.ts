import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const usersRouter = Router();

usersRouter.post('/', async (req, res) => {
  const { email, password } = req.body;

  const authService = new AuthenticateUserService();
  const token = await authService.execute({ email, password });

  return res.status(201).json(token);
});

export default usersRouter;
