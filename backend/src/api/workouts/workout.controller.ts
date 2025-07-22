import { NextFunction, Request, Response } from 'express';
import { createWorkoutsDTO } from './workout.model';
import { WorkoutsService } from './workout.service';
import { sendSuccessResponse } from '../../common/utils/statusResponse';

class workoutController {
  async createWorkout(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = (req as any).user.id;

      const body = await createWorkoutsDTO.validateAsync(req.body);

      await WorkoutsService.createWorkout(userId, body);

      sendSuccessResponse(res, 'Create Workout Successfully');
    } catch (error) {
      next(error);
    }
  }
}
export const WorkoutController = new workoutController();
