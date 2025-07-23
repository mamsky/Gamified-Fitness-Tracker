import express from 'express';
import { authCheck } from '../../common/middlewares/auth-check.middleware';
import { ProfileController } from './profile.controller';
const profileRoutes = express.Router();

profileRoutes.get('/profile', authCheck, ProfileController.getProfile);

export default profileRoutes;
