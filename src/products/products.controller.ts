import { Controller, Get } from '@nestjs/common';

import { ProductsService } from './products.service';
import { prisma } from 'prisma/prisma';

@Controller('products')
export class ProductsController {
    constructor(readonly productsService: ProductsService) {}

    @Get() // test request for postgres
    async getHello() {
        let posts;
        posts = await prisma.post.findMany();
        return posts;
    }

    // @Get() //test request for mongo
    // getAll(): Promise<Product[]> {
    //     return this.productsService.getAll();
    // }
}
