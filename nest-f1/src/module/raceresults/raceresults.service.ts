import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateRaceResultDto } from './dto/create-raceresults.dto';
import { UpdateRaceResultDto } from './dto/update-raceresults.dto';
import { Raceresults, RaceresultsDocument } from './schemas/raceresults.schema';

@Injectable()
export class RaceresultsService {
    constructor(@InjectModel(Raceresults.name) private catModel: Model<RaceresultsDocument>) { }

    async create(CreateRaceResultDto: CreateRaceResultDto): Promise<Raceresults> {
        const createdCat = new this.catModel(CreateRaceResultDto);
        return createdCat.save();
    }

    async findAll(): Promise<Raceresults[]> {
        return this.catModel.find().exec();
    }

    findOne(id: number) {
        return this.catModel.findOne({ year: 2023 })
    }

    update(id: number, updateCatDto: UpdateRaceResultDto) {
        return `This action updates a #${id} cat`;
    }

    remove(id: number) {
        return `This action removes a #${id} cat`;
    }
}