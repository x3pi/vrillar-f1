'use strict';

import { Tabletojson } from 'tabletojson';

for (let i = 2023; i <= 2023; i++) {
    Tabletojson.convertUrl(
        'https://www.formula1.com/en/results/jcr:content/resultsarchive.html/' + i + '/races.html',
        function (tablesAsJson: any) {
            for (let y = 0; y < tablesAsJson[0].length; y++) {
                let GrandPrix = tablesAsJson[0][y]['Grand Prix'];
                var words = GrandPrix.split('/');
                words = words.splice(3).join('/')
                Tabletojson.convertUrl(
                    'https://www.formula1.com/en/results/jcr:content/resultsarchive.html/' + words,
                    function (tablesAsJson2: any) {
                        console.log(tablesAsJson2[0]);
                    }
                )
            }
        }
    )
}