import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RaceresultsController } from './raceresults.controller';
import { RaceresultsService } from './raceresults.service';
import { Raceresults, RaceresultsSchema } from './schemas/raceresults.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Raceresults.name, schema: RaceresultsSchema }])],
    controllers: [RaceresultsController],
    providers: [RaceresultsService],
})
export class RaceresultsModule { }