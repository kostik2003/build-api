import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

    @Post('tasks')
    async getTodayTasks(@Body() nameProject) {
        const projects = this.projectService.getAllTrackingToday(nameProject);
        return projects;
    }

    @Post('user/:email')
    async getUniqueUserByEmail(@Param() userEmail) {
        const user = await this.projectService.getUniqueUserByEmail(userEmail);
        return user;
    }
    @Get('users')
    async getAllUserByEmail() {
        const user = await this.projectService.getAllUser();
        return user;
    }
}
