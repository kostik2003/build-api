require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const DB_PORT = process.env.DB_PORT || 3001;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    try {
        await app.listen(DB_PORT, () => {
            console.log(`Server started on port ${DB_PORT} `);
        });
    } catch (e) {
        console.error('server not started');
    }
}

bootstrap();
