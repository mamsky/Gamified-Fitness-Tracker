import { prisma } from '../../utils/prisma.utils.';
import { registerSchema } from './auth.model';

class AuthService {
  async findAll() {
    return await prisma.user.findMany();
  }

  async findById(id: number) {
    return await prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async findByEmail(email: string) {
    return await prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async createAuth(data: registerSchema) {
    return await prisma.user.create({
      data,
    });
  }
}

export const authService = new AuthService();
