import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RaceresultsModule } from './module/raceresults/raceresults.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest-f1'), RaceresultsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
