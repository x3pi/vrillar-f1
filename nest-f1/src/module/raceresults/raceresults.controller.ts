import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Query,
} from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateRaceResultDto } from './dto/create-raceresults.dto';
import { RaceresultsService } from './raceresults.service';
import { Raceresults } from './schemas/raceresults.schema';


@Controller('Raceresults')
@ApiTags('Raceresults')
export class RaceresultsController {
    constructor(private readonly RaceresultsService: RaceresultsService) { }
    @Get(':year/races/info')
    findInfoRacesByYear(@Param('year') year: number) {
        return this.RaceresultsService.findInfoRacesByYear(year);
    }

    @Get(':year/teams/info')
    findInfoTeamsByYear(@Param('year') year: number) {
        return this.RaceresultsService.findInfoTeamByYear(year);
    }

    @Get(':year/drives/info')
    findInfoDrivesByYear(@Param('year') year: number) {
        return this.RaceresultsService.findInfoDrivesByYear(year);
    }
}