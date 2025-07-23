import { NextFunction, Request, Response } from 'express';
import { authService } from '../auth/auth.service';
import { levelSystem } from '../../common/utils/levelSystem';
import { sendErrorResponse } from '../../common/utils/statusResponse';

class profileController {
  async getProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = (req as any).user.id;
      const getUser = await authService.findById(userId);
      if (!getUser) {
        return sendErrorResponse(res, 'User not found', 404);
      }
      const { xp } = getUser;
      const { level, progress } = levelSystem(xp);

      res.send({ xp, level, progress });
    } catch (error) {
      next(error);
    }
  }
}

export const ProfileController = new profileController();
