require('dotenv').config();
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { TrackingModule } from './tracking/tracking.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './roles/roles.guard';
import { ConfigService } from '@nestjs/config';

const DB_NAME_MONGO = process.env.DB_NAME_MONGO;
const DB_HOST = process.env.DB_HOST || 3002;
const DB_PORT_MONGO = process.env.DB_PORT_MONGO;
@Module({
    imports: [
        MongooseModule.forRoot(`${DB_NAME_MONGO}://${DB_HOST}:${DB_PORT_MONGO}`),
        UserModule,
        TrackingModule,
        AuthModule,
    ],
    controllers: [AppController],
    providers: [AuthService, { provide: APP_GUARD, useClass: RolesGuard }],
})
export class AppModule {}
