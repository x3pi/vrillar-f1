'use strict';

import { Tabletojson } from 'tabletojson';

import mongoose from 'mongoose';
import sha1 from 'sha1';
import { RayceResult } from "./models/RayceResult";

const message: string = "my message";
const hash: string = sha1(message);

console.log(hash); // 104ab42f1193c336aa2cf08a2c946d5c6fd0fcdb

mongoose.connect('mongodb://127.0.0.1:27017/nest-f1')
    .then(() => console.log('Connected!'));


// for (let i = 2023; i <= 2023; i++) {
//     try {
//         Tabletojson.convertUrl(
//             'https://www.formula1.com/en/results/jcr:content/resultsarchive.html/' + i + '/races.html',
//             function (tablesAsJson: any) {
//                 for (let y = 0; y < tablesAsJson[0].length; y++) {
//                     let GrandPrix = tablesAsJson[0][y]['Grand Prix'];
//                     var words = GrandPrix.split('/');
//                     words = words.splice(3).join('/')

//                     try {
//                         Tabletojson.convertUrl(
//                             'https://www.formula1.com/en/results/jcr:content/resultsarchive.html/' + words,
//                             function (tablesAsJson2: any) {
//                                 for (let z = 0; z < tablesAsJson2[0].length; z++) {
//                                     const data = new RayceResult({
//                                         pkey: sha1(words[0] + words[2] + words[3] + tablesAsJson2[0][z]['Driver']),
//                                         year: words[0],
//                                         raceID: words[2],
//                                         raceName: words[3],
//                                         pos: tablesAsJson2[0][z]['Pos'],
//                                         no: tablesAsJson2[0][z]['No'],
//                                         driver: tablesAsJson2[0][z]['Driver'],
//                                         car: tablesAsJson2[0][z]['Car'],
//                                         laps: tablesAsJson2[0][z]['Laps'],
//                                         timeOrRetired: tablesAsJson2[0][z]['Time/Retired'],
//                                         pts: tablesAsJson2[0][z]['PTS'],
//                                     });
//                                     try {
//                                         data.save().then(() => console.log(words[0] + words[2] + words[3] + tablesAsJson2[0][z]['Driver']));
//                                     } catch (error) {
//                                         console.error("--------------");
//                                     }

//                                 }

//                             }
//                         )
//                     } catch (error) {
//                         console.error("--------------");
//                     }
//                 }
//             }
//         )
//     } catch (error) {
//         console.error("--------------");
//     }
// }

async function createDataRacesJob() {
    
  
}

async function crawDataRaces() {

  
}