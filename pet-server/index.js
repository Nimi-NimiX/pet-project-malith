const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("./utils/logger");
const databaseConnect = require("./database/database");
require("dotenv").config();

//middleware
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  logger.info("server has started on port 5000");
});
