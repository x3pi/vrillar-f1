'use strict';

import { Tabletojson } from 'tabletojson';

Tabletojson.convertUrl(
    'https://www.formula1.com/en/results.html/1990/races.html',
    function (tablesAsJson: any) {
        console.log(tablesAsJson[0]);
    }
)