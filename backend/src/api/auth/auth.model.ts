import Joi from 'joi';

export const createAuthDTO = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password_hash: Joi.string().min(8).required().messages({
    'string.min': 'Password must be at least 8 characters long',
  }),
});

export type registerSchema = ReturnType<typeof createAuthDTO.validate>['value'];
