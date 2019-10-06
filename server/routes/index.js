const express = require('express');
var cors = require('cors');
const app = express();
var fs = require('fs');

let rawdata = fs.readFileSync(__dirname + '/jobs.json');
let jobs = JSON.parse(rawdata);

var whitelist = ['http://localhost:3000'];
var corsOptions = {
    origin: function (origin, callback) {
        console.log(origin);
        console.log(whitelist);
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors(corsOptions));

app.get('/api/job', (req, res) => {
    console.log(req.query)
    res.setHeader('Content-Type', 'application/json');

    let nationality = req.query.nationality || '';

    let result = jobs.data.filter(job => job.nationality == nationality || nationality == '');

    res.send(result);
});

app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
);