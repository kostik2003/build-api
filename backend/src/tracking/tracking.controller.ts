import { Controller, Request, UseGuards } from '@nestjs/common';
import { Body, Get, Post, Param } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('tracking')
export class TrackingController {
    @UseGuards(JwtAuthGuard)
    @Get()
    getProfile(@Request() req) {
        return req.user;
    }
}
