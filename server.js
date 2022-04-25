const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const { Sequelize } = require('sequelize/types');
const SequelizeStore = require('connects-seesion-sequelize')(session.store);

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        DB: Sequelize
    })
};

app.use(session(sess));

const helpers = require('/utils/helpers');

const hbs = exphbs.create({ helpers });

