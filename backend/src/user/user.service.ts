import { Injectable } from '@nestjs/common';
import { Prisma, User, Tracking, Tasks, Project } from '@prisma/client';
import { userInfo } from 'os';
import { PrismaService } from 'prisma/prisma.service';
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
        const resoult = this.prisma.tracking.findMany();
        return resoult;
    }

    async getAllPostsToday(): Promise<Tracking[]> {
        //запрос по дате
        const dateNow = new Date();
        const asdf = dateNow.toLocaleDateString();
        console.log(asdf); //возвращает день
        const resoult = this.prisma.tracking.findMany({
            where: {
                // calendare: ,
            },
        });
        return resoult;
    }

    async createReport(data: Tracking, userEmail: string, tasksData, projectName: string): Promise<Tracking> {
        const post = await this.prisma.tracking.create({
            data: {
                discriptionTrack: data.discriptionTrack,
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
                    create: [...tasksData],
                },
            },
        });

        return post;
    }
}
