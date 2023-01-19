import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AdminService {
    constructor(private prisma: PrismaService) {}

    //поиск юзеров
    async findUser(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User> {
        console.log(userWhereUniqueInput);
        return this.prisma.user.findUnique({
            where: userWhereUniqueInput,
        });
    }

    //найти всех пользователей в рабочем пространстве.
    async findAllUsersInTeam(): Promise<User[]> {
        return this.prisma.user.findMany();
    }

    //найти всех пользователей.
    findAllUsers(): Promise<User[]> {
        return this.prisma.user.findMany();
    }

    async inviteUser() {} //приглашение юзера в рабочее пространство

    async getTrackingListToday() {} //получение данныех за сегодня

    async getTrackingListToYesterday() {} //отчет за вчера

    async createNewTeam() {} //создание нового рабочего пространства

    async deleteFromTeam() {} // удаление из рабочего пространства
}
