import * as mongoose from 'mongoose';


interface IRacesJobResultModel {
    url: string,
    status: boolean,
}

const RacesJobResultModelSchema = new mongoose.Schema<IRacesJobResultModel>({
    url: { type: String, unique: true },
    status: { type: Boolean },
});


const RacesJobResultModel = mongoose.model<IRacesJobResultModel>('RacesResultJob', RacesJobResultModelSchema);

export { IRacesJobResultModel, RacesJobResultModel }