'use strict';

import { Tabletojson } from 'tabletojson';

import mongoose from 'mongoose';
import sha1 from 'sha1';
const message: string = "my message";
const hash: string = sha1(message);

console.log(hash); // 104ab42f1193c336aa2cf08a2c946d5c6fd0fcdb

mongoose.connect('mongodb://127.0.0.1:27017/nest-f1')
    .then(() => console.log('Connected!'));

