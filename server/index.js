const express = require('express');

const app = express();

app.get('/api/job', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify([
        { id: 1, position: "sr software engineer", description: "this is a new job" },
        { id: 1, position: "sr software engineer", description: "this is a new job" },
        { id: 1, position: "sr software engineer", description: "this is a new job" },
        { id: 1, position: "sr software engineer", description: "this is a new job" },
        { id: 1, position: "sr software engineer", description: "this is a new job" },
        { id: 1, position: "sr software engineer", description: "this is a new job" }
    ]));
});

app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
);