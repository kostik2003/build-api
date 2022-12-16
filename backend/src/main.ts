require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import { PrismaService } from '../prisma/prisma.service';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

const DB_PORT = process.env.DB_PORT || 3001;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({ credentials: true });
    app.use(cookieParser());
    const prismaService = app.get(PrismaService);
    await prismaService.enableShutdownHooks(app);

    try {
        await app.listen(DB_PORT, () => {
            console.log(`Server started on port ${DB_PORT}, http://localhost:3001`);
        });
    } catch (e) {
        console.error('server not started');
    }
}

bootstrap();
