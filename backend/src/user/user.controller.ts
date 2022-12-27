import { Body, Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { User, Role, Prisma } from '@prisma/client';
import { UserService } from './user.service';
import { User as UserModel, Tracking } from '@prisma/client';
import { Roles } from 'src/roles/roles.decorator';

@Controller('tracking')
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
        const user = this.userServise.createUser(authData);
        console.log(user);
        return user;
    }

    @Post('newpost')
    async createReport(
        @Body()
        trackData: {
            gitSourse: string;
            discription: string;
            target: string;
            author: any;
            nextDayDiscription: string;
            workTime: string;
            reworked: string;
            calendare: string;
        }
    ) {
        const report = this.userServise.createReport(trackData);
        return report;
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
