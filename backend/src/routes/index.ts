import { Router } from 'express';

import appointmentsRouter from './appointmentsRoutes';
import usersRouter from './usersRoutes';
import sessionsRoutes from './sessionsRoutes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRoutes);

export default routes;
