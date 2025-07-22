import express from 'express';
import { authCheck } from '../../common/middlewares/auth-check.middleware';
import { WorkoutController } from './workout.controller';
const workoutRouter = express.Router();

workoutRouter.get('/workouts', authCheck, WorkoutController.getWorkout);
workoutRouter.post('/workouts', authCheck, WorkoutController.createWorkout);
workoutRouter.put('/workouts/:id', authCheck, WorkoutController.updateWorkout);
workoutRouter.delete(
  '/workouts/:id',
  authCheck,
  WorkoutController.deleteWorkout,
);

export default workoutRouter;
