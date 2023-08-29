const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("./utils/logger");
const databaseConnect = require("./database/databaseConnection");
require("dotenv").config();

//middleware
app.use(cors());
app.use(express.json());

app.listen(process.env.SERVER_PORT, () => {
  logger.info(`server has started on port ${process.env.SERVER_PORT}`);
});
