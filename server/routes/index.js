const express = require('express');
var cors = require('cors');
const app = express();

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

// Then pass them to cors:
app.use(cors(corsOptions));

app.get('/api/job', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify([
        {
            id: 1, position: "PROJECT MANAGER",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua…",
            nationality: "German",
            salary: 35000,
            endsOn: "01/01/2020",
            postedOn: "01/09/2019",
            type: "Management",
            gender: "Male"
        },
        {
            id: 2, position: "ACCOUNT MANAGER",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua…",
            nationality: "Britain",
            salary: 25000,
            endsOn: "01/01/2020",
            postedOn: "01/09/2019",
            type: "Management",
            gender: "Male"
        },
        {
            id: 3, position: "ACCOUNT MANAGER",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua…",
            nationality: "American",
            salary: 15000,
            endsOn: "01/01/2020",
            postedOn: "01/09/2019",
            type: "Management",
            gender: "Male"
        },
        {
            id: 4, position: "ACCOUNT MANAGER",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua…",
            nationality: "UAE",
            salary: 30000,
            endsOn: "01/01/2020",
            postedOn: "01/09/2019",
            type: "Management",
            gender: "Male"
        },
        {
            id: 5, position: "ACCOUNT MANAGER",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua…",
            nationality: "French",
            salary: 38000,
            endsOn: "01/01/2020",
            postedOn: "01/09/2019",
            type: "Management",
            gender: "Male"
        },
        {
            id: 6, position: "ACCOUNT MANAGER",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua…",
            nationality: "Arabic",
            salary: 10000,
            endsOn: "01/01/2020",
            postedOn: "01/09/2019",
            type: "Management",
            gender: "Male"
        }
    ]));
});

app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
);