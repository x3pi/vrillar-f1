'use strict';

import { Tabletojson } from 'tabletojson';

for (let i = 2023; i <= 2023; i++) {
    Tabletojson.convertUrl(
        'https://www.formula1.com/en/results/jcr:content/resultsarchive.html/' + i + '/races.html',
        function (tablesAsJson: any) {
            for (let y = 0; y < tablesAsJson[0].length; y++) {
                let GrandPrix = tablesAsJson[0][y]['Grand Prix'].toLowerCase().replace(' ', '-')
               console.log(tablesAsJson);
                // Tabletojson.convertUrl(
                //     'https://www.formula1.com/en/results/jcr:content/resultsarchive.html/2023/races/' + GrandPrix + '/race-result.html',
                //     function (tablesAsJson2: any) {
                //         console.log(GrandPrix);
                //         console.log(tablesAsJson2[0]);
                //     }
                // )
            }
        }
    )
}