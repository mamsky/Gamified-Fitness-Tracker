import Joi from 'joi';

export const createAuthDTO = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'Full Name Required',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'must be a valid email.',
    'any.required': 'Email Required',
  }),
  password: Joi.string().min(8).required().messages({
    'string.min': 'Password must be at least 8 characters',
    'any.required': 'Password Required',
  }),
});

export type registerSchema = ReturnType<typeof createAuthDTO.validate>['value'];

export const AuthDTO = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': 'must be a valid email.',
    'any.required': 'Email Required',
  }),
  password: Joi.string().min(8).required().messages({
    'string.min': 'Password must be at least 8 characters',
    'any.required': 'Password Required',
  }),
});

export type LoginSchema = ReturnType<typeof AuthDTO.validate>['value'];
