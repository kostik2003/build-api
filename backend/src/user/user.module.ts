import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { PrismaService } from 'prisma/prisma.service';
import { RolesGuard } from 'src/roles/roles.guard';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    controllers: [UserController],
    providers: [{ provide: APP_GUARD, useClass: RolesGuard }, UserService, PrismaService],
    imports: [],
    exports: [UserService],
})
export class UserModule {}
