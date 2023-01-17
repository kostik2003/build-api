import { createParamDecorator, ExecutionContext, SetMetadata } from '@nestjs/common';
import { Role } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';

export const ROLES_KEY = 'roles';

export const Users = createParamDecorator((data: any, ctx: ExecutionContext) => {
    const jwtService = new JwtService();

    const request = ctx.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;
    const token = authHeader.split(' ')[1].slice(1, -1);

    const decodeToken: any = jwtService.decode(token);
    return decodeToken.email;
});

export const Token = createParamDecorator((data: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const authBody = request.body.token;
    const token = authBody.slice(1, -1);
    return token;
});

//доделать позже
export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
