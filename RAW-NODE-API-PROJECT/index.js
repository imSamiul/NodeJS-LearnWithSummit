/*
Title: Uptime Monitoring Application
Description: A RESTFul API to monitor up or down time of user defined links
Author: Samiul Karim Prodhan
Date: 22.01.2024
*/

// dependencies
const http = require('http');

// app object - module scaffolding
const app = {};

// configuration
app.config = {
    port: 3000,
};

// create server

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log('Listening to port 3000');
    });
};

// handle request response
app.handleReqRes = (req, res) => {
    // response handle
    res.end('Hello World');
};

// start the server
app.createServer();
