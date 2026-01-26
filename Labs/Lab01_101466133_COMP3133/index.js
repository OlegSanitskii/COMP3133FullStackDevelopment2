const fs = require('fs');
const csv = require('csv-parser');

const CANADA_FILE = 'canada.txt';
const USA_FILE = 'usa.txt';

[CANADA_FILE, USA_FILE].forEach(file => {
    if (fs.existsSync(file)) {
        fs.unlinkSync(file);
    }
});

const canadaStream = fs.createWriteStream(CANADA_FILE);
const usaStream = fs.createWriteStream(USA_FILE);

canadaStream.write('country,year,population\n');
usaStream.write('country,year,population\n');

fs.createReadStream('input_countries.csv')
    .pipe(csv())
    .on('data', (row) => {
        const country = row.country.toLowerCase();

        if (country === 'canada') {
            canadaStream.write(`${row.country},${row.year},${row.population}\n`);
        }

        if (country === 'united states') {
            usaStream.write(`${row.country},${row.year},${row.population}\n`);
        }
    })
    .on('end', () => {
        console.log('Files canada.txt and usa.txt have been created successfully');
        canadaStream.end();
        usaStream.end();
    });
