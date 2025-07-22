import express, { type Express } from 'express';
import { errorHandler } from './common/middlewares/errorHandler';
import cors from 'cors';
import { corsOption } from './common/config/cors.config';
import authRouter from './api/auth/auth.routes';
import workoutRouter from './api/workouts/workout.routes';

const app: Express = express();
app.use(express.json());
app.use(cors(corsOption));

app.use('/api/auth', authRouter);
app.use('/api', workoutRouter);

app.use(errorHandler);
export default app;
