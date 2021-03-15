import { Router } from 'express';

import CreateUser from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const createUser = new CreateUser();
    const userCreated = await createUser.execute({ name, email, password });

    const { password: _, ...userWithoutPassword } = userCreated;

    return res.status(201).send(userWithoutPassword);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default usersRouter;
