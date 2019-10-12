const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// nacte konfiguracni soubor
require('dotenv').config();

// vytvori express server na portu 5000
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// pripojeni MongoDB Atlas
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB připojení do databáze je funkční');
});

// definice rout
const employeeRouter = require('./routes/employee');

app.use('/employee', employeeRouter);

app.listen(port, () => {
  console.log(`Server běží na portu: ${port}`);
});
