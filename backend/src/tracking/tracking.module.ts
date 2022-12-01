import { Module } from '@nestjs/common';
import { TrackingController } from './tracking.controller';
import { TrackingService } from './tracking.service';

@Module({
    controllers: [TrackingController],
    providers: [TrackingService],
    imports: [],
})
export class TrackingModule {}
