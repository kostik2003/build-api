import { Injectable } from '@nestjs/common';
import { Prisma, User, Tracking, Tasks, Project } from '@prisma/client';
import { userInfo } from 'os';
import { PrismaService } from 'prisma/prisma.service';
import { TaskService } from 'src/task/task.service';
@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        return this.prisma.user.create({
            data,
        });
    }

    async getUniqueUser(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User> {
        return this.prisma.user.findUnique({
            where: userWhereUniqueInput,
        });
    }

    async saveToken(email, token) {
        const resoult = await this.prisma.user.update({
            where: {
                email,
            },
            data: {
                email,
                access_token: token,
            },
        });
        return resoult;
    }

    async delete(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
        return this.prisma.user.delete({
            where: userWhereUniqueInput,
        });
    }

    async findToken(access_token) {
        const resoult = await this.prisma.user.findFirst(access_token);
        return resoult;
    }

    async getAllUsers(): Promise<User[]> {
        return this.prisma.user.findMany({
            include: {
                posts: true,
            },
        });
    }

    async getAllposts(): Promise<Tracking[]> {
        return this.prisma.tracking.findMany();
    }

    async createReport(data: Tracking, userEmail: string, tasksData: Tasks, projectName: string): Promise<Tracking> {
        const post = await this.prisma.tracking.create({
            data: {
                discription: data.discription,
                calendare: data.calendare,
                nextDayDiscription: data.nextDayDiscription,
                project: {
                    connect: {
                        name: projectName,
                    },
                },
                author: {
                    connect: {
                        email: userEmail,
                    },
                },
                tasks: {
                    create: {
                        discription: tasksData.discription,
                        name: tasksData.name,
                        time: tasksData.isComplite,
                        isComplite: tasksData.isComplite,
                    },
                },
            },
        });

        return post;
    }
}
