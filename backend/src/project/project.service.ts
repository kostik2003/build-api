import { Injectable } from '@nestjs/common';
import { Prisma, Project } from '@prisma/client';
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
}
