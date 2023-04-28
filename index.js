const express = require('express');
const { PORT } = require('./src/configs/server.config');
const { connect } = require('mongoose');

const app = express();


app.get('/', (req, res) => {
  console.log('Hello World!');
  res.status(200).send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Application is running in PORT: ${PORT}`);
  connect();
})