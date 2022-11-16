const express = require('express');
require('dotenv').config();
const router = require('./routes/index');
const app = express();

const db_URL = process.env.db_URL;
const path = require('path');
app.use('/upload', express.static(path.join('upload')));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/api', router);
const mongoose = require('mongoose');

mongoose.connect(db_URL, {useNewUrlParser: true}).then(() => {
  console.log('Database connected', db_URL);
  app.listen(process.env.PORT || 5100, async () => {
    console.log(`server is running on port : ${process.env.PORT || 5100}`);
  });
});
