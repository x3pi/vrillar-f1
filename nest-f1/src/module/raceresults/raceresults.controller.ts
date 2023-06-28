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
    @Get(':year/races')
    findInfoRacesByYear(@Param('year') year: number) {
        return this.RaceresultsService.findInfoRacesByYear(year);
    }

    @Get(':year/teams')
    findInfoTeamsByYear(@Param('year') year: number) {
        return this.RaceresultsService.findInfoTeamByYear(year);
    }

    @Get(':year/drives')
    findInfoDrivesByYear(@Param('year') year: number) {
        return this.RaceresultsService.findInfoDrivesByYear(year);
    }

    @Get(':year/races/:raceName')
    findInfoRacesByYearAndRaceName(@Param('year') year: number, @Param('raceName') raceName: string) {
        return this.RaceresultsService.findInfoRacesByYearAndRaceName(year, raceName);
    }

    @Get(':year/teams/:teamName')
    findInfoTeamsByYearAndTeamName(@Param('year') year: number, @Param('teamName') teamName: string) {
        return this.RaceresultsService.findInfoTeamsByYearAndTeamName(year, teamName);
    }

    @Get(':year/drives/:driveName')
    findInfoDrivesByYearAndDriveName(@Param('year') year: number, @Param('driveName') driveName: string) {
        return this.RaceresultsService.findInfoDrivesByYearAndDriveName(year, driveName);
    }

    
    @Get(':year/rank/:teamName')
    findRankByYearAndTeamName(@Param('year') year: number, @Param('teamName') teamName: string) {
        return this.RaceresultsService.findRankByYearAndTeamName(year, teamName);
    }

}