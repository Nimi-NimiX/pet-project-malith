const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
const authRoutes = require('./routes/authRoute');
const profileRoutes = require('./routes/profileRoute');
const userConfig = require('./configuration/userConfig');
const logger = require('./utils/logger');
const databaseConnect = require('./database/databaseConnection');
const synchronizeDatabase = require('./database/synchronizeDatabase');

require('dotenv').config();

//middleware
app.use(cors());
app.use(express.json());

// Initialize and configure Passport for authentication
app.use(passport.initialize());
require('./configuration/userConfig');

//routes
//Use the auth routes for registration and login
app.use('/auth', authRoutes);
//Use the profile routes for user profile and company profile
app.use(passport.authenticate('jwt', { session: false })); // Passport middleware
app.use('/api', profileRoutes);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`server has started on port ${process.env.SERVER_PORT}`);
});
