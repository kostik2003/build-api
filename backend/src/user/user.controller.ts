import { Body, Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { User, Role } from '@prisma/client';
import { UserService } from './user.service';
import { User as UserModel, Post as PostModel } from '@prisma/client';
import { Roles } from 'src/roles/roles.decorator';
import { Any } from 'typeorm';

@Controller('registration')
export class UserController {
    constructor(private readonly userServise: UserService) {}

    @Get(':email')
    // @Roles(Role.ADMIN)
    async getUnique(@Param('email') email: String): Promise<UserModel> {
        console.log(email);
        return this.userServise.getUniqueUser({
            email: String(email),
        });
    }

    @Get()
    async getAllUser() {
        return this.userServise.getAllUsers({});
    }

    @Post()
    async createUser(@Body() authData: { name: string; email: string; password: string }): Promise<User> {
        const resoult = this.userServise.createUser(authData);
        console.log(resoult);
        return resoult;
    }
    // roles: Role[];

    // @Get() //test request for mongo
    // getAll(): Promise<Product[]> {
    //     return this.productsService.getAll();
    // }

    @Delete(':email')
    async deleteUser(@Param('email') email: String) {
        return this.userServise.delete({
            email: String(email),
        });
    }
}
