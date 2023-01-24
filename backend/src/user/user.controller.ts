import { Body, Controller, Get, Post, Param, Delete, UseGuards, UseInterceptors } from '@nestjs/common';
import { User, Role, Prisma } from '@prisma/client';
import { UserService } from './user.service';
import { User as UserModel, Tracking } from '@prisma/client';
import { Users } from 'src/roles/roles.decorator';
import { tasksDataDto, trackingDto } from './userDto/Dto';

@Controller('tracking')
export class UserController {
    constructor(private readonly userServise: UserService) {}

    @Get('email/:email')
    async getUnique(@Param('email') email: String): Promise<UserModel> {
        return this.userServise.getUniqueUser({
            email: String(email),
        });
    }

    @Get()
    async getAllUser() {
        return this.userServise.getAllUsers();
    }

    @Get('posts')
    async getAllPosts(@Users() userEmail: string) {
        const resoult = this.userServise.getAllPosts(userEmail);
        return resoult;
    }

    @Post()
    async createUser(@Body() authData: { name: string; email: string; password: string }): Promise<User> {
        const user = this.userServise.createUser(authData);
        return user;
    }

    @Post('newpost')
    async createReport(@Users() email: string, @Body() trackData: trackingDto, tasksData: tasksDataDto) {
        const userEmail = email;
        const tasks = trackData.formFields;
        const projectName = trackData.nameProject;
        const report = this.userServise.createReport(trackData, userEmail, tasks, projectName);
        return report;
    }

    @Delete('delete') //3.14 Здец (переделывать)
    async deleteReport(@Body() trackingId) {
        const track = this.userServise.deleteTracking(trackingId);
        return track;
    }

    @Delete(':email')
    async deleteUser(@Param('email') email: String) {
        return this.userServise.delete({
            email: String(email),
        });
    }
}
