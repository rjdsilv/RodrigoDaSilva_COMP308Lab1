﻿const config = require('./config');
const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');

// Configure Express.
module.exports = () => {
    const app = express();

    if (process.env.NODE_END === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_END === 'development') {
        app.use(compress());
    }

    // Configure the application.
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));

    // Configure the application view.
    app.set('views', './app/views'); // Relative to server.js
    app.set('view engine', 'ejs');
    app.engine('html', require('ejs').renderFile);

    // Configuring routes.
    require('../app/routes/index.server.routes');

    // Configure static file serving.
    app.use(express.static('./public'));

    return app;
};