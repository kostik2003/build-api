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

    async getAllUsers(params): Promise<User[]> {
        const { skip, take, where } = params;
        return this.prisma.user.findMany({
            skip,
            take,
            where,
        });
    }

    async createReport(data: Tracking, userEmail: User): Promise<Tracking> {
        const user = await this.prisma.tracking.create({
            data: {
                ...data,
                author: {
                    connect: {
                        email: userEmail.email,
                    },
                },
            },
        });

        return user;
    }

    // async createReport() {}
}
