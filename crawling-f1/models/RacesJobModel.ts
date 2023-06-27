import * as mongoose from 'mongoose';


interface IRacesJobModel {
    year: string,
    status: boolean,
}

const RacesJobModelSchema = new mongoose.Schema<IRacesJobModel>({
    year: { type: String, unique: true },
    status: { type: Boolean },
});


const RacesJobModel = mongoose.model<IRacesJobModel>('RacesJob', RacesJobModelSchema);

export { IRacesJobModel, RacesJobModel }