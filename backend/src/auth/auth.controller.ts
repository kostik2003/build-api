import { Controller, Body, Post, Request, UseGuards, Get, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { TRegister } from './auth.service';
import { UserService } from 'src/user/user.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Response } from 'express';

@Controller('authentication')
export class AuthController {
    constructor(private authService: AuthService, private userService: UserService) {}

    @Post('register')
    async register(@Body() regInput: TRegister) {
        const registe = this.authService.register(regInput);
        return registe;
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req, @Res({ passthrough: true }) res: Response) {
        const user = req.user;
        user.password = undefined;
        const token = await this.authService.getJwtToken(user);
        console.log(token);
        return token;
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async auth(@Request() req) {
        const user = req.user;
        user.password = undefined;
        return user;
    }
}
