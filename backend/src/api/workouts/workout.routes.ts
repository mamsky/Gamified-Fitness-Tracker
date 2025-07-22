import express from 'express';
import { authCheck } from '../../common/middlewares/auth-check.middleware';
import { WorkoutController } from './workout.controller';
const workoutRouter = express.Router();

workoutRouter.post('/workouts', authCheck, WorkoutController.createWorkout);

export default workoutRouter;
