import * as mongoose from 'mongoose';


interface IRaceResultModel {
    pkey: string,
    year: number,
    raceID: number,
    raceName: string,
    car: string,
    pos: string,
    no: number,
    driver: string,
    lastDriver: string,
    laps: number,
    timeOrRetired: string,
    pts: number,
}

const RaceResultModelSchema = new mongoose.Schema<IRaceResultModel>({
    pkey: { type: String, unique: true },
    year: { type: Number },
    raceID: { type: Number },
    raceName: { type: String },
    pos: { type: String },
    no: { type: Number },
    driver: { type: String },
    lastDriver: { type: String },
    car: { type: String },
    laps: { type: Number },
    timeOrRetired: { type: String },
    pts: { type: Number },

});


const RaceResultModel = mongoose.model<IRaceResultModel>('RaceResult', RaceResultModelSchema);

export { IRaceResultModel, RaceResultModel }