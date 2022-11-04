import { Module } from '@nestjs/common';
import { ProductsController } from './products/products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017'),
        ProductsModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
