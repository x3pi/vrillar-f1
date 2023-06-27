'use strict';
import { Tabletojson } from 'tabletojson';

import mongoose from 'mongoose';
import { RacesJobResultModel } from "../models/RacesJobResultModel";
import { RayceResultModel } from "../models/RayceResultModel";

mongoose.connect('mongodb://127.0.0.1:27017/nest-f1')
    .then(() => console.log('Connected!'));
import sha1 from 'sha1';
const message: string = "my message";
const hash: string = sha1(message);
console.log(hash); // 104ab42f1193c336aa2cf08a2c946d5c6fd0fcdb


async function crawRacesResult() {
    const all = await RacesJobResultModel.find({ status: false });

    all.map((job) => {
        getTableData(job['url'])
    });
}
function getTableData(url: string) {
    var words = url.split('/');
    words = words.splice(3)
    var stringUrl = words.join('/')
    Tabletojson.convertUrl(
        'https://www.formula1.com/en/results/jcr:content/resultsarchive.html/' + stringUrl,
        function (tablesAsJson2: any) {
            var rawDocuments: any[] = []
            for (let z = 0; z < tablesAsJson2[0].length; z++) {
                rawDocuments.push(new RayceResultModel({
                    pkey: sha1(words[0] + words[2] + words[3] + tablesAsJson2[0][z]['Driver'] + tablesAsJson2[0][z]['Laps']),
                    year: words[0],
                    raceID: words[2],
                    raceName: words[3],
                    pos: tablesAsJson2[0][z]['Pos'],
                    no: tablesAsJson2[0][z]['No'],
                    driver: tablesAsJson2[0][z]['Driver'],
                    car: tablesAsJson2[0][z]['Car'],
                    laps: tablesAsJson2[0][z]['Laps'],
                    timeOrRetired: tablesAsJson2[0][z]['Time/Retired'],
                    pts: tablesAsJson2[0][z]['PTS'],
                }));

            }

            RayceResultModel.insertMany(rawDocuments)
                .then(async function (mongooseDocuments) {
                    console.log("getTableData done" + url);
                    let data = await RacesJobResultModel.findOneAndUpdate({ url: url }, { status: true });
                })
                .catch(function (err) {
                    console.log("getTableData error" + url);
                    console.log(err);
                });
        })

}
crawRacesResult()

