import { prisma } from '../../common/utils/prisma.utils.';
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
    const { name, email, password } = data;
    return await prisma.user.create({
      data: {
        name,
        email,
        password_hash: password,
      },
    });
  }
}

export const authService = new AuthService();
