require('dotenv').config();
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductsModule } from './products/products.module';

const DB_NAME_MONGO = process.env.DB_NAME_MONGO;
const DB_HOST = process.env.DB_HOST || 3001;
const DB_PORT_MONGO = process.env.DB_PORT_MONGO;
@Module({
  imports: [MongooseModule.forRoot(`${DB_NAME_MONGO}://${DB_HOST}:${DB_PORT_MONGO}`), ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
