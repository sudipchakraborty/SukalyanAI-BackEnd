require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const contactRoutes =
    require('./modules/contact/contact.routes');

const app = express();

/*
 * Body Parsers
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
 * Middleware
 */
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));

/*
 * Routes
 */
app.use('/api/contact', contactRoutes);

module.exports = app;