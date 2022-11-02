import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Controller('products')
export class ProductsController {
    @Get()
    async getHello() {
        let posts;
        posts = await prisma.post.findMany();
        return posts;
    }
}
