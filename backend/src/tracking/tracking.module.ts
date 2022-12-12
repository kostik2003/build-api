import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { TrackingController } from './tracking.controller';
import { TrackingService } from './tracking.service';

@Module({
    controllers: [TrackingController],
    providers: [TrackingService],
    imports: [AuthModule],
})
export class TrackingModule {}
