require('dotenv').config();
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './roles/roles.guard';
import { AdminModule } from './admin/admin.module';
import { ProjectModule } from './project/project.module';
import { TaskService } from './task/task.service';
import { TaskController } from './task/task.controller';
import { TaskModule } from './task/task.module';

const DB_NAME_MONGO = process.env.DB_NAME_MONGO;
const DB_HOST = process.env.DB_HOST || 3002;
const DB_PORT_MONGO = process.env.DB_PORT_MONGO;
@Module({
    imports: [
        MongooseModule.forRoot(`${DB_NAME_MONGO}://${DB_HOST}:${DB_PORT_MONGO}`),
        UserModule,
        AuthModule,
        AdminModule,
        ProjectModule,
        TaskModule,
    ],
    controllers: [AppController, TaskController],
    providers: [AuthService, { provide: APP_GUARD, useClass: RolesGuard }, TaskService],
})
export class AppModule {}
