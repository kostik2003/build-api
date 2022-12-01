import { Controller } from '@nestjs/common';
import { Body, Get, Post, Param } from '@nestjs/common';
import { TrackingService } from './tracking.service';

@Controller('tracking')
export class TrackingController {
    constructor(private readonly trackingService: TrackingService) {}

    @Get('user')
    async getAllUser() {
        return this.trackingService;
    }
}
