import { Injectable } from '@nestjs/common';
import { Prisma, Project, Tracking } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ProjectService {
    constructor(private prisma: PrismaService) {}

    async createProject(data: Prisma.ProjectCreateInput): Promise<Project> {
        return this.prisma.project.create({
            data,
        });
    }

    async getAllProject(): Promise<Project[]> {
        return this.prisma.project.findMany({
            include: {
                users: true,
                tracking: true,
            },
        });
    }

    async getAllTrackingToday(nameProject): Promise<Tracking[]> {
        const dateNow = new Date().toLocaleDateString();
        const resoult = this.prisma.tracking.findMany({
            where: {
                calendare: dateNow,
                projectName: nameProject.nameProject,
            },
        });
        return resoult;
    }

    async getUniqueUserByEmail(userEmail) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: userEmail.email,
            },
            include: {
                posts: {
                    include: {
                        tasks: true,
                    },
                },
            },
        });
        return user;
    }

    async getAllUser() {
        const user = await this.prisma.user.findMany({});
        return user;
    }
}
