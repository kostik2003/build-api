import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
    constructor(private readonly projectService: ProjectService) {}
    @Post('newproject')
    async createProject(@Body() nameProject) {
        const project = this.projectService.createProject(nameProject);
        return project;
    }

    @Get('allproject')
    async getAllProject() {
        const projects = this.projectService.getAllProject();
        return projects;
    }
}
