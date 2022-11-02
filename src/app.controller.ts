import { Controller, Get } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AppService } from './app.service';

const prisma = new PrismaClient();

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    async getHello() {
        return 'hello world';
    }
}
