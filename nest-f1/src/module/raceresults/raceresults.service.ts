import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateRaceResultDto } from './dto/create-raceresults.dto';
import { UpdateRaceResultDto } from './dto/update-raceresults.dto';
import { Raceresults, RaceresultsDocument } from './schemas/raceresults.schema';

@Injectable()
export class RaceresultsService {
    constructor(@InjectModel(Raceresults.name) private catModel: Model<RaceresultsDocument>) { }

    findInfoRacesByYear(year: number) {
        return this.catModel.aggregate([
            {
                '$match': {
                    'year': Number(year)
                }
            }, {
                '$sort': {
                    'laps': -1
                }
            }, {
                '$group': {
                    '_id': '$raceID',
                    'raceName': {
                        '$first': '$raceName'
                    },
                    'laps': {
                        '$first': '$laps'
                    },
                    'car': {
                        '$first': '$car'
                    },
                    'winner': {
                        '$first': '$driver'
                    },
                    'time': {
                        '$first': '$timeOrRetired'
                    },
                }
            }
        ])
    }


    findInfoTeamByYear(year: number) {
        return this.catModel.aggregate([
            {
                '$match': {
                    'year': Number(year)
                }
            },
            {
                '$group': {
                    '_id': '$car',
                    'pts': {
                        '$sum': '$pts'
                    }
                }
            },
            {
                '$sort': {
                    'pts': -1
                }
            }
        ])
    }

    findInfoDrivesByYear(year: number) {
        return this.catModel.aggregate([
            {
                '$match': {
                    'year': Number(year)
                }
            },
            {
                '$group': {
                    '_id': '$driver',
                    'pts': {
                        '$sum': '$pts'
                    },
                    'nationality': {
                        '$first': '$lastDriver'
                    },
                    'car': {
                        '$first': '$car'
                    }
                }
            },
            {
                '$sort': {
                    'pts': -1
                }
            }
        ])
    }
}