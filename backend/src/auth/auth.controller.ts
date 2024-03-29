import { Controller, Body, Post, Request, UseGuards, Get, Req, Res, HttpException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { TRegister } from './auth.service';
import { UserService } from 'src/user/user.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Response } from 'express';
import { Token, Users } from 'src/roles/roles.decorator';

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
        let email = user.email;
        user.password = undefined;
        const token = await this.authService.getJwtToken(user);
        if (!token) {
            throw new HttpException('Invalid Email or Password', 401);
        }
        return token;
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async auth(@Request() req) {
        const user = req.user;
        user.password = undefined;
        return user;
    }

    @Get('token')
    async validToken(@Users() userEmail: string, @Request() req) {
        const authHeader = req.headers.authorization;
        const tokenCookie = authHeader.split(' ')[1].slice(1, -1);
        const user = await this.userService.findToken(userEmail);
        const expEmail = user.email;
        if (user.access_token === tokenCookie) {
            return { expEmail, tokenCookie };
        } else {
            console.error('error 2134');
        }
    }
}
