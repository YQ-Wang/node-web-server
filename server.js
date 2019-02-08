const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send({
        name: 'Messi',
        likes: [
            'Biking',
            'Soccer'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'unable to handle request'
    });
});

app.listen(3000);