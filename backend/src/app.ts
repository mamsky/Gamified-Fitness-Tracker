import express, { type Express } from 'express';
import { errorHandler } from './common/middlewares/errorHandler';
import cors from 'cors';
import { corsOption } from './common/config/cors.config';
import authRouter from './api/auth/auth.routes';
import workoutRouter from './api/workouts/workout.routes';
import profileRoutes from './api/profile/profile.routes';

const app: Express = express();
app.use(express.json());
app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  }),
);

app.use('/api/auth', authRouter);
app.use('/api', profileRoutes);
app.use('/api', workoutRouter);

app.use(errorHandler);
export default app;
