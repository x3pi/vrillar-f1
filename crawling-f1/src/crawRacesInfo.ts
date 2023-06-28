'use strict';
import { Tabletojson } from 'tabletojson';

import mongoose from 'mongoose';
import { RacesJobModel } from "../models/RacesJobModel";
import { RacesInfoModel } from "../models/RacesInfoModel";

mongoose.connect('mongodb://127.0.0.1:27017/nest-f1')
    .then(() => console.log('Connected!'));
import sha1 from 'sha1';
const message: string = "my message";
const hash: string = sha1(message);
console.log(hash); // 104ab42f1193c336aa2cf08a2c946d5c6fd0fcdb


async function crawRacesInfo() {
    const all = await RacesJobModel.find({ status: false });
    let requestsArray: any[] = []
    await  all.map(async (job) => {
        await requestsArray.push(getTableData(job['year']))
    });

    console.log(requestsArray.length)
    Promise.all(requestsArray).then(allResults => {
        console.log(allResults)
        console.log("all Done")
    })

}
crawRacesInfo()
async function getTableData(year: number) {
    await Tabletojson.convertUrl(
        'https://www.formula1.com/en/results/jcr:content/resultsarchive.html/' + year + '/races.html',
        function (tablesAsJson: any) {
            var rawDocuments: any[] = []
            for (let y = 0; y < tablesAsJson[0].length; y++) {
                let GrandPrix = tablesAsJson[0][y]['Grand Prix'];
                var words = GrandPrix.split('/');
                words = words.splice(3)

                rawDocuments.push(new RacesInfoModel({
                    pkey: sha1(words[0] + words[2] + words[3] + tablesAsJson[0][y]['Laps']),
                    year: year,
                    id: words[2],
                    urlDataGrandPrix: GrandPrix,
                    GrandPrix: words[3],
                    Date: tablesAsJson[0][y]['Date'],
                    Winner: tablesAsJson[0][y]['Winner'],
                    Car: tablesAsJson[0][y]['Car'],
                    Laps: tablesAsJson[0][y]['Laps'],
                    Time: tablesAsJson[0][y]['Time'],
                }))
            }
            return RacesInfoModel.insertMany(rawDocuments)
                .then(async function (mongooseDocuments) {
                    console.log("getTableData done" + year);
                    // let data = await RacesJobModel.findOneAndUpdate({ year: year }, { status: true });
                })
                .catch(function (err) {
                    console.log("getTableData error" + year);
                });
        })
}
//getTableData(2023);