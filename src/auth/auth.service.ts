import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SignupDto } from './dto';

import * as argon from 'argon2';

import { SigninDto } from './dto/signinDto';
import { JwtService } from '@nestjs/jwt/dist';
import { ConfigService } from '@nestjs/config';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: SignupDto) {
    try {
      const password = await argon.hash(dto.password);

      const user = await this.prisma.user.create({
        data: {
          password,
          email: dto.email,
          access: dto.access,
          employeeId: dto.employeeId,
          statusId: dto.statusId,
        },
      });

      delete user.password;

      return user;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
  }

  async signin(dto: SigninDto) {
    try {
      const user = await this.prisma.user.findUnique({
        include: {
          employee: true,
        },
        where: {
          email: dto.email,
        },
      });

      if (!user)
        throw new ForbiddenException({
          message: 'credential incorrect',
          status: false,
        });

      const passwordMatches = await argon.verify(user.password, dto.password);

      if (!passwordMatches)
        throw new ForbiddenException({
          message: 'credential incorrect',
          status: false,
        });

      delete user.password;

      const permissions = await this.getUserPermissions(user);

      const token = await this.getSignToken(user.id, user.email);

      return {
        user,
        token,
        permissions,
      };
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
        message: 'unexpected error',
      });
    }
  }

  getSignToken(userId: number, email: string): Promise<string> {
    const payload = {
      sub: userId,
      email,
    };

    return this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: this.config.get('JWT_SECRET'),
    });
  }

  async getUserPermissions(user: User) {
    const permissions = await this.prisma.permission.findMany({
      where: {
        UserGroupPermission: {
          some: {
            group: user.access,
          },
        },
      },
    });

    return permissions;
  }
}
