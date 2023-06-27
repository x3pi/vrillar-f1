import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateRaceResultDto } from './dto/create-raceresults.dto';
import { RaceresultsService } from './raceresults.service';
import { Raceresults, RaceresultsDocument } from './schemas/raceresults.schema';


@Controller('Raceresults')
@ApiTags('Raceresults')
export class RaceresultsController {
    constructor(private readonly RaceresultsService: RaceresultsService) { }

    @Post()
    async create(@Body() createCatDto: CreateRaceResultDto) {
        console.log(createCatDto);
        return this.RaceresultsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Raceresults[]> {
        return this.RaceresultsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.RaceresultsService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCatDto: CreateRaceResultDto) {
        return this.RaceresultsService.update(+id, updateCatDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.RaceresultsService.remove(+id);
    }
}