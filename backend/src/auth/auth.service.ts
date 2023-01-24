import { HttpException, HttpStatus, Injectable, Param } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'prisma/prisma.service';

export type TRegister = {
    email: string;
    password: string;
    name: string;
};
export default TRegister;
@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) {}

    async register(regInput: TRegister) {
        const hashedPassword = await bcrypt.hash(regInput.password, 10);
        try {
            const createUser = await this.userService.createUser({
                //Dto
                ...regInput,
                password: hashedPassword,
            });
            createUser.password = undefined;
            return createUser;
        } catch (error) {
            throw new HttpException('user already exist', HttpStatus.BAD_REQUEST);
        }
    }

    async getAuthUser(email: string, plainTextPassword: string) {
        try {
            const user = await this.userService.getUniqueUser({ email });
            await this.verifyPassword(plainTextPassword, user.password);
            user.password = undefined;
            return user;
        } catch (error) {
            console.error(error);
        }
    }

    async verifyPassword(plainTextPassword: string, hashedPassword: string) {
        const isPasswordMatch = await bcrypt.compare(plainTextPassword, hashedPassword);
        if (!isPasswordMatch) {
            throw new HttpException('password not match', HttpStatus.BAD_REQUEST);
        }
    }

    async getJwtToken(user: any) {
        const email = user.email;
        const payload = { email: user.email, sub: user.id, name: user.name };
        const token = this.jwtService.sign(payload, { secret: process.env.TOKEN_SECRET });
        await this.userService.saveToken(email, token); //пересохранение токена
        return token;
    }
}
