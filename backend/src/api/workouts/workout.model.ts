// exercise_name, duration, calories_burned, date

import Joi from 'joi';

export const createWorkoutsDTO = Joi.object({
  exercise_name: Joi.string().max(100).required().messages({
    'any.required': 'Exercise Name is required',
    'string.max': 'Exercise Name must be less than or equal to 100 characters',
  }),
  duration: Joi.number()
    .min(1) // Minimal durasi 1 menit
    .required()
    .messages({
      'any.required': 'Duration is required',
      'number.min': 'Duration must be at least 1 minute',
    }),
  calories_burned: Joi.number()
    .min(1) // Minimal 1 kalori dibakar
    .required()
    .messages({
      'any.required': 'Calories Burned is required',
      'number.min': 'Calories Burned must be at least 1',
    }),
  date: Joi.date().required().messages({ 'any.required': 'Date is required' }),
});

export type WorkoutSchema = ReturnType<
  typeof createWorkoutsDTO.validate
>['value'];
