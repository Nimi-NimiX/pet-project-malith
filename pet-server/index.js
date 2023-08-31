const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('./utils/logger');
const databaseConnect = require('./database/databaseConnection');
const synchronizeDatabase = require('./database/synchronizeDatabase');

require('dotenv').config();

//middleware
app.use(cors());
app.use(express.json());

app.listen(process.env.SERVER_PORT, () => {
  console.log(`server has started on port ${process.env.SERVER_PORT}`);
});
