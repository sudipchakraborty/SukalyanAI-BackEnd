require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const contactRoutes = require('./modules/contact/contact.routes');

const app = express();

app.use((req, res, next) => {
    console.log('REQUEST:', req.method, req.url);
    next();
});

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
 * Health Check
 */
app.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        service: 'SukalyanAI Backend'
    });
});

/*
 * Test Endpoint
 */
app.post('/api/test', (req, res) => {

    console.log('TEST HIT');
    console.log(req.body);

    res.status(200).json({
        success: true,
        message: 'Test endpoint working'
    });
});

/*
 * Contact Routes
 */
app.use('/api/contact', contactRoutes);

module.exports = app;