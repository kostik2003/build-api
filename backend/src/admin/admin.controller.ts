import { Controller, Get } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}

    @Get('all')
    // @Roles('ADMIN')
    async getAllUsers(): Promise<UserModule> {
        return this.adminService.findAllUsers();
    }
}
