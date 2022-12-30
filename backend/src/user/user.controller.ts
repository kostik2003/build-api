import { Body, Controller, Get, Post, Param, Delete, UseGuards, UseInterceptors } from '@nestjs/common';
import { User, Role, Prisma } from '@prisma/client';
import { UserService } from './user.service';
import { User as UserModel, Tracking } from '@prisma/client';
// import { GetEmailGuard } from 'src/roles/roles.guard';
import { Users } from 'src/roles/roles.decorator';

export default class trackingDto {
    id;
    gitSourse: string;
    discription: string;
    target: string;
    author: any;
    nextDayDiscription: string;
    workTime: string;
    reworked: string;
    calendare: Date;
    authorId;
}
@Controller('tracking')
export class UserController {
    constructor(private readonly userServise: UserService) {}

    @Get(':email')
    async getUnique(@Param('email') email: String): Promise<UserModel> {
        // console.log(email);
        return this.userServise.getUniqueUser({
            email: String(email),
        });
    }

    @Get()
    async getAllUser() {
        return this.userServise.getAllUsers();
    }

    @Get('posts')
    async getAllPosts() {
        return this.userServise.getAllposts();
    }

    @Post()
    async createUser(@Body() authData: { name: string; email: string; password: string }): Promise<User> {
        const user = this.userServise.createUser(authData);
        // console.log(user);
        return user;
    }

    @Post('newpost')
    async createReport(@Users() email: string, @Body() trackData: trackingDto) {
        const userEmail = email;
        // console.log(trackData);
        // console.log(userEmail);
        const report = this.userServise.createReport(trackData, userEmail);
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
