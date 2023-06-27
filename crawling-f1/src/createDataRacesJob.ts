'use strict';

import mongoose from 'mongoose';
import { RacesJobModel } from "../models/RacesJobModel";

mongoose.connect('mongodb://127.0.0.1:27017/nest-f1')
    .then(() => console.log('Connected!'));

async function createDataRacesJob() {
    var foo = [];
    var rawDocuments = []
    for (var i = 1950; i <= 2023; i++) {
        foo.push(i);
        rawDocuments.push(new RacesJobModel({
            year: i,
            status: false,
        }))
    }
    await RacesJobModel.insertMany(rawDocuments)
        .then(function (mongooseDocuments) {
            console.log("createDataRacesJob done");

        })
        .catch(function (err) {
            console.log("createDataRacesJob error");
        });
}
createDataRacesJob()
