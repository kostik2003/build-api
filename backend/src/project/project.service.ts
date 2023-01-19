import { Injectable } from '@nestjs/common';
import { Prisma, Project } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ProjectService {
    constructor(private prisma: PrismaService) {}

    async createProject(data: Prisma.ProjectCreateInput): Promise<Project> {
        console.log(data);
        return this.prisma.project.create({
            data,
        });
    }
}
