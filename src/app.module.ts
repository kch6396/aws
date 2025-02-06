import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckSheetModule } from './check-sheet/check-sheet.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { WorkPlanModule } from './work-plan/work-plan.module';
import { DriversModule } from './drivers/drivers.module';
import { RecordModule } from './record/record.module';
import { HealthyModule } from './healthy-check/healthy.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (ConfigService: ConfigService) => ({
        uri: ConfigService.get<string>('DATABASE_URL'),
      }),
      inject: [ConfigService],
    }),
    CheckSheetModule,
    WorkPlanModule,
    DriversModule,
    RecordModule,
    HealthyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
