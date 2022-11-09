import { Get, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Product, ProductDocument } from 'schemas/products.schema';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}
  @Get()
  async getAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }
}
