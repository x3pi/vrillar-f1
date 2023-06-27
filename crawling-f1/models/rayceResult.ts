import * as mongoose from 'mongoose';


interface IRayceResult {
    pkey: string,
    year: Number,
    raceID: Number,
    raceName: string,
    car: string,
    pos: string;
    no: Number;
    driver: string;
    laps: Number;
    timeOrRetired: string;
    pts: Number;
}

const rayceResultSchema = new mongoose.Schema<IRayceResult>({
    pkey: { type: String, unique: true },
    year: { type: Number },
    raceID: { type: Number },
    raceName: { type: String },
    pos: { type: String },
    no: { type: Number },
    driver: { type: String },
    car: { type: String },
    laps: { type: Number },
    timeOrRetired: { type: String },
    pts: { type: Number },

});


const RayceResult = mongoose.model<IRayceResult>('RayceResult', rayceResultSchema);

export { IRayceResult, RayceResult }