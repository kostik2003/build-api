import { Controller, Body, Post, Request, Response, UseGuards, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { TRegister } from './auth.service';
import { UserService } from 'src/user/user.service';
import { JwtAuthGuard } from './jwt-auth.guard';

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
    async login(@Request() req) {
        const user = req.user;
        user.password = undefined;
        return this.authService.getJwtToken(user);
    }
    @UseGuards(JwtAuthGuard)
    @Get()
    async auth(@Request() req) {
        const user = req.user;
        user.password = undefined;
        return user;
    }
}
