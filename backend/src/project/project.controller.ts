import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
    constructor(private readonly projectService: ProjectService) {}
    @Post('newproject') //создание нового проекта(делается с консоли)
    async createProject(@Body() nameProject) {
        const project = this.projectService.createProject(nameProject);
        return project;
    }

    @Get('allproject') //получение свех проектов
    async getAllProject() {
        const projects = this.projectService.getAllProject();
        return projects;
    }

    @Post('tasks') //для получения тасок, выполненных сегодня по конкретному проекту.
    async getTodayTasks(@Body() nameProject) {
        const projects = this.projectService.getAllTrackingToday(nameProject);
        return projects;
    }

    @Post('user/:email')
    async getUniqueUserByEmail(@Body() userEmail) {
        const user = await this.projectService.getUniqueUserByEmail(userEmail);
        return user;
    }

    @Get('users')
    async getAllUserByEmail() {
        const user = await this.projectService.getAllUser();
        return user;
    }

    @Get('user/:email')
    async getInfoUser(@Param('email') userEmail) {
        console.log(userEmail);
        const info = await this.projectService.getAllInfoUser(userEmail);
    }
}
