import { Body, Controller, Post } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
    constructor(private readonly projectService: ProjectService) {}
    @Post()
    async createProject(@Body() nameProject) {
        console.log(nameProject);
        const project = this.projectService.createProject(nameProject);
        console.log(project);
        return project;
    }
}
