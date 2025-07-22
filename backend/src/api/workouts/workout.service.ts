import { prisma } from '../../common/utils/prisma.utils.';
import { WorkoutSchema } from './workout.model';

class Workouts {
  async findAll() {
    return await prisma.workout.findMany();
  }

  async findById(userId: number) {
    return await prisma.workout.findFirst({
      where: { userId },
    });
  }

  async createWorkout(userId: number, data: WorkoutSchema) {
    const { exercise_name, duration, calories_burned, date } = data;
    return await prisma.workout.create({
      data: {
        userId,
        exerciseName: exercise_name,
        duration,
        caloriesBurned: calories_burned,
        date,
      },
    });
  }

  async updateWorkout(id: number, data: WorkoutSchema) {
    const { exercise_name, duration, calories_burned, date } = data;
    return await prisma.workout.update({
      data: {
        exerciseName: exercise_name,
        duration,
        caloriesBurned: calories_burned,
        date,
      },
      where: { id },
    });
  }
}
export const WorkoutsService = new Workouts();
