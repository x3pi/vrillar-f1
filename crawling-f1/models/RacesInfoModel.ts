import * as mongoose from 'mongoose';


interface IRacesInfoModel {
    pkey: string,
    id : string,
    year: string,
    urlDataGrandPrix: string;
    GrandPrix: string,
    Date: string,
    Winner: string,
    Car: string,
    Laps: string,
    Time: string,
}

const RacesInfoModelSchema = new mongoose.Schema<IRacesInfoModel>({
    pkey: { type: String, unique: true },
    id: { type: String },
    year: { type: String },
    urlDataGrandPrix: { type: String },
    GrandPrix: { type: String },
    Date: { type: String },
    Winner: { type: String },
    Car: { type: String },
    Laps: { type: String },
    Time: { type: String },
});


const RacesInfoModel = mongoose.model<IRacesInfoModel>('RacesInfo', RacesInfoModelSchema);

export { IRacesInfoModel, RacesInfoModel }