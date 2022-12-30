import { Injectable } from '@nestjs/common';
import { Prisma, User, Tracking } from '@prisma/client';
import { userInfo } from 'os';
import { PrismaService } from 'prisma/prisma.service';
@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        console.log(data);
        return this.prisma.user.create({
            data,
        });
    }

    async getUniqueUser(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User> {
        // console.log(userWhereUniqueInput);
        return this.prisma.user.findUnique({
            where: userWhereUniqueInput,
        });
    }
    async delete(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
        return this.prisma.user.delete({
            where: userWhereUniqueInput,
        });
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

    async createReport(data: Tracking, userEmail: string): Promise<Tracking> {
        const post = await this.prisma.tracking.create({
            data: {
                discription: data.discription,
                gitSourse: data.gitSourse,
                target: data.target,
                workTime: data.workTime,
                reworked: data.reworked,
                calendare: data.calendare,
                nextDayDiscription: data.nextDayDiscription,
                author: {
                    connect: {
                        email: userEmail,
                    },
                },
            },
        });

        return post;
    }

    // async createReport() {}
}
