import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

import constants from './config/constants';
import authRouters from './routers/authentication';
import shopRouters from './routers/shop';


// create express app
const app = new express();

// Using morgan for logging
app.use(morgan('dev'));
app.use(morgan('combined', {
    stream: fs.createWriteStream(path.join(__dirname, '../access.log'), {flags: 'a'})
}));

const corsOptions = {
    origin: constants.app.hostClient,
    optionsSuccessStatus: 200
};

// Enable CORS Requests
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// parse requests of content-type - application/json
app.use(bodyParser.json());


//#region defining routes
// generic route for logging
app.all('/*', (req, res, next) => {
    console.log(`Time: ${Date.now()}`);
    next();
});


app.use( '/api/v1/auth', authRouters);
app.use( '/api/v1/shop', shopRouters);


// middleware to handle a 404 respone
app.use( (req, res, next) => {
    console.log(`URL NOT FOUND REQUESTED: ${req.originalUrl}`);
    let response = {message: 'Sorry can\'t find that!'};
    res.status(404).json(response);
});

// error-handling middleware
app.use( (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({message: 'Something broke!'});
});



// listen for requests
app.listen( constants.app.serverPort, () => {
    console.log(`Server is listening on port ${constants.app.serverPort}`);
});