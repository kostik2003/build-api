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
}
