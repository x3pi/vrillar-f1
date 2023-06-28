'use strict';

import mongoose from 'mongoose';
import { RacesInfoModel } from "../models/RacesInfoModel";
import { RacesJobResultModel } from "../models/RacesJobResultModel";


mongoose.connect('mongodb://127.0.0.1:27017/nest-f1')
    .then(() => console.log('Connected!'));

async function createDataRacesJob() {
    var foo = [];
    var rawDocuments: any[] = []
    const all = await RacesInfoModel.aggregate([
        { $group: { _id: null, urlDataGrandPrixs: { $addToSet: "$urlDataGrandPrix" } } }
    ]);;
    console.log(all);


    all[0]["urlDataGrandPrixs"].map((job: { [x: string]: any; }) => {
        rawDocuments.push(new RacesJobResultModel({
            url: job,
            status: false,
        }))
    });
    await RacesJobResultModel.insertMany(rawDocuments)
        .then(function (mongooseDocuments) {
            console.log("createDataRacesJob done");

        })
        .catch(function (err) {
            console.log("createDataRacesJob error");
        });
}
createDataRacesJob()
