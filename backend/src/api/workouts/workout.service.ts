import { prisma } from '../../common/utils/prisma.utils.';
import { WorkoutSchema } from './workout.model';

class Workouts {
  async findAll(userId: number) {
    return await prisma.workout.findMany({
      where: { userId },
    });
  }

  async findById(id: number) {
    return await prisma.workout.findUnique({
      where: { id },
    });
  }

  async createWorkout(userId: number, data: WorkoutSchema) {
    const { exercise_name, duration, calories_burned, date } = data;
    return prisma.$transaction(async (tx) => {
      await tx.workout.create({
        data: {
          userId,
          exerciseName: exercise_name,
          duration,
          caloriesBurned: calories_burned,
          date,
        },
      });

      const user = await tx.user.findUnique({
        where: { id: userId },
        select: { xp: true },
      });

      if (!user) {
        throw new Error('User not found');
      }
      const newXp = user.xp + duration * 10;

      await tx.user.update({
        data: { xp: newXp },
        where: { id: userId },
      });
    });
  }

  async updateWorkout(
    id: number,
    userId: number,
    oldDuration: number,
    oldXp: number,
    data: WorkoutSchema,
  ) {
    const { exercise_name, duration, calories_burned, date } = data;
    const xpChange = (duration - oldDuration) * 10;
    const newXp = oldXp + xpChange;

    return prisma.$transaction(async (tx) => {
      await tx.workout.update({
        data: {
          exerciseName: exercise_name,
          duration,
          caloriesBurned: calories_burned,
          date,
        },
        omit: { userId: true },
        where: { id },
      });

      await tx.user.update({
        data: { xp: newXp },
        where: { id: userId },
      });
    });
  }

  async deleteWorkout(
    id: number,
    userId: number,
    duration: number,
    oldXp: number,
  ) {
    const xpChange = -duration * 10;
    const newXp = oldXp + xpChange;
    return prisma.$transaction(async (tx) => {
      await tx.workout.delete({
        where: { id },
      });

      await tx.user.update({
        data: { xp: newXp },
        where: { id: userId },
      });
    });
  }
}
export const WorkoutService = new Workouts();
