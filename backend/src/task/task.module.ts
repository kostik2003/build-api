import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
    controllers: [TaskController],
    providers: [TaskService, PrismaService],
})
export class TaskModule {}
