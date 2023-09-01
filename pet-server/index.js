const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/authRoute');
const logger = require('./utils/logger');
const databaseConnect = require('./database/databaseConnection');
const synchronizeDatabase = require('./database/synchronizeDatabase');

require('dotenv').config();

//middleware
app.use(cors());
app.use(express.json());

//routes
//Use the auth routes for registration
app.use('/auth', authRoutes);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`server has started on port ${process.env.SERVER_PORT}`);
});
