import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';
import { RolesGuard } from 'src/roles/roles.guard';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    controllers: [UserController],
    providers: [{ provide: APP_GUARD, useClass: RolesGuard }, UserService, PrismaService, AuthService, JwtService],
    exports: [UserService, JwtService],
})
export class UserModule {}
