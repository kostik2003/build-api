import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { Prisma, User, Role } from '@prisma/client';
import { UserService } from './user.service';
import { User as UserModel, Post as PostModel } from '@prisma/client';
import { Roles } from 'src/roles/roles.decorator';

@Controller('login')
export class UserController {
    constructor(private readonly userServise: UserService) {}

    @Get(':email')
    async getUnique(@Param('email') email: String): Promise<UserModel> {
        return this.userServise.getUniqueUser({
            email: String(email),
        });
    }

    @Get()
    async getAllUser() {
        return this.userServise.getAllUsers({});
    }

    @Post()
    @Roles(Role.ADMIN)
    async createUser(@Body() authData: { name: string; email: string; password: string }): Promise<User> {
        return this.userServise.createUser(authData);
    }
    roles: Role[];

    // @Get() //test request for mongo
    // getAll(): Promise<Product[]> {
    //     return this.productsService.getAll();
    // }
}
