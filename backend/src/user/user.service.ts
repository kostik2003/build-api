import { Injectable } from '@nestjs/common';
import { Prisma, User, Tracking, Tasks, Project } from '@prisma/client';
import { userInfo } from 'os';
import { PrismaService } from 'prisma/prisma.service';
import { trackingDto } from './userDto/Dto';
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
    //удаление трэка конкретного юзера
    //Переделывать
    async deleteTracking(trackingId) {
        console.log(trackingId);

        const deleteTask = this.prisma.tasks.deleteMany({
            where: {
                taskUser: trackingId.id,
            },
        });

        const deleteTrack = this.prisma.tracking.delete({
            where: {
                id: trackingId.id,
            },
        });

        const resoult = this.prisma.$transaction([deleteTask, deleteTrack]);
        // const resoul32 = this.prisma.$disconnect  ??? какой то дисконнект.
        return resoult;
    }
    //
    async delete(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
        return this.prisma.user.delete({
            where: userWhereUniqueInput,
        });
    }

    async findToken(userEmail) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: userEmail,
            },
        });
        return user;
    }

    async getAllUsers(): Promise<User[]> {
        return this.prisma.user.findMany({
            include: {
                posts: true,
            },
        });
    }

    async getAllPostsToday(): Promise<Tracking[]> {
        const resoult = this.prisma.tracking.findMany();
        return resoult;
    }

    async getAllPosts(userEmail): Promise<Tracking[]> {
        const dateNow = new Date().toLocaleDateString();
        const resoult = this.prisma.tracking.findMany({
            where: {
                authorEmail: userEmail,
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
