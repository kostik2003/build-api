import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';

@Module({
    imports: [],
    controllers: [AppController, ProductsController],
    providers: [AppService],
})
export class AppModule {}
