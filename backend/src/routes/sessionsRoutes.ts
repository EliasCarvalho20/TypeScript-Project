import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const usersRouter = Router();

usersRouter.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    const authService = new AuthenticateUserService();
    const token = await authService.execute({ email, password });

    return res.status(201).json(token);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default usersRouter;
