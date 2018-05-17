const SpotifyWebAPI = require('spotify-web-api-node');
const express = require('express');
const app = express();

const spotify = new SpotifyWebAPI({
    clientId: '',
    clientSecret: ''
});

app.get('/', function (req, res, next) {
    // in this case we are using the Client Credential Flow
    spotify.clientCredentialsGrant().then(
        function(data) {
            res.json(data.body['access_token']);
        },
        function(err) {
            console.log('Error', err);
            res.sendStatus(500);
        }
    );
});

app.listen(3000, function () {
    console.log('Listening.');
});
