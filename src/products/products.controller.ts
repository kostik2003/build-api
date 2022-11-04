import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Product } from 'schemas/products.schema';
import { ProductsService } from './products.service';

const prisma = new PrismaClient();

@Controller('products')
export class ProductsController {
    constructor(readonly productsService: ProductsService) {}

    @Get() // test request for postgres
    async getHello() {
        let posts;
        posts = await prisma.post.findMany();
        return posts;
    }

    @Get() //test request for mongo
    getAll(): Promise<Product[]> {
        return this.productsService.getAll();
    }
}
