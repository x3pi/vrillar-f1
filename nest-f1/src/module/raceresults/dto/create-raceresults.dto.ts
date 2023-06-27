import { ApiProperty } from '@nestjs/swagger';

export class CreateRaceResultDto {
    @ApiProperty()
    pkey: string;
    @ApiProperty()
    year: number;
    @ApiProperty()
    raceID: number;
    @ApiProperty()
    raceName: string;
    @ApiProperty()
    car: string;
    @ApiProperty()
    pos: string;
    @ApiProperty()
    no: number;
    @ApiProperty()
    driver: string;
    @ApiProperty()
    lastDriver: string;
    @ApiProperty()
    laps: number;
    @ApiProperty()
    timeOrRetired: string;
    @ApiProperty()
    pts: number
}