import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
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
        return this.prisma.user.findUnique({
            where: userWhereUniqueInput,
        });
    }

    async getAllUsers(params: { skip?: number; take?: number; where?: Prisma.PostWhereInput }): Promise<User[]> {
        const { skip, take, where } = params;
        return this.prisma.user.findMany({
            skip,
            take,
            where,
        });
    }
}
