import { PartialType } from '@nestjs/mapped-types';
import { CreateRaceResultDto } from './create-raceresults.dto';

export class UpdateRaceResultDto extends PartialType(CreateRaceResultDto) { }