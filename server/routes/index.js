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
        { id: 1, position: "sr software engineer", description: "this is a new job" },
        { id: 2, position: "sr software engineer", description: "this is a new job" },
        { id: 3, position: "sr software engineer", description: "this is a new job" },
        { id: 4, position: "sr software engineer", description: "this is a new job" },
        { id: 5, position: "sr software engineer", description: "this is a new job" },
        { id: 6, position: "sr software engineer", description: "this is a new job" }
    ]));
});

app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
);