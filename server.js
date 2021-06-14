require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

const db = mongoose.connection;

db.on('error', () => console.log('Database failed to connect'));
db.on('connected', () => console.log('Connected to Trotr MongoDB'))
db.on('disconnected', () => console.log('Connection to Trotr MongoDB ended'))

const PORT = process.env.PORT || 3000;
app.use(PORT, () => {
    console.log('Trotr serve running on port ' + PORT);
})