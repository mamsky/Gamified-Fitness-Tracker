import { NextFunction, Request, Response } from 'express';
import { WorkoutService } from './workout.service';
import {
  sendErrorResponse,
  sendSuccessResponse,
} from '../../common/utils/statusResponse';
import { authService } from '../auth/auth.service';
import { WorkoutDTO } from './workout.model';

class workoutController {
  async createWorkout(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = (req as any).user.id;
      const body = await WorkoutDTO.validateAsync(req.body);

      await WorkoutService.createWorkout(userId, body);

      return sendSuccessResponse(res, 'Create Workout Successfully');
    } catch (error) {
      next(error);
    }
  }

  async getWorkout(req: Request, res: Response, next: NextFunction) {
    try {
      const idUser = (req as any).user.id;

      const workout = await WorkoutService.findAll(idUser);

      return sendSuccessResponse(res, 'Create Workout Successfully', workout);
    } catch (error) {
      next(error);
    }
  }

  async updateWorkout(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const idUser = (req as any).user.id;
      const body = await WorkoutDTO.validateAsync(req.body);

      const user = await authService.findById(idUser);
      if (!user) {
        return sendErrorResponse(res, 'user not found', 404);
      }

      const workout = await WorkoutService.findById(Number(id));
      if (!workout) {
        return sendErrorResponse(res, 'workout not found', 404);
      }

      const { xp: oldXp } = user!;
      const { duration: oldDuration } = workout!;

      await WorkoutService.updateWorkout(
        Number(id),
        idUser,
        oldDuration,
        oldXp,
        body,
      );

      sendSuccessResponse(res, 'Update Workout Successfully');
    } catch (error) {
      next(error);
    }
  }

  async deleteWorkout(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const userId = (req as any).user.id;

      const user = await authService.findById(userId);
      if (!user) {
        return sendErrorResponse(res, 'user not found', 404);
      }

      const workout = await WorkoutService.findById(Number(id));
      if (!workout) {
        return sendErrorResponse(res, 'workout not found', 404);
      }
      const { xp: oldXp } = user!;
      const { duration: oldDuration } = workout!;
      await WorkoutService.deleteWorkout(
        Number(id),
        userId,
        oldDuration,
        oldXp,
      );
      return sendSuccessResponse(res, 'Delete Workout Successfully');
    } catch (error) {
      next(error);
    }
  }
}

export const WorkoutController = new workoutController();
