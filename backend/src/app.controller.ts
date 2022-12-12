import { Controller, Get, Post, Request, Response, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
    constructor(private authService: AuthService) {}
    // @UseGuards(LocalAuthGuard)
    // @Post('login')
    // async login(@Request() req) {
    //     console.log(req.user);
    //     const resoult = this.authService.login(req.user);
    //     console.log(resoult);
    //     return resoult;
    // }
    // @Post('login')
    // async login(@Request() req) {
    //     return req.user;
    // }
}
