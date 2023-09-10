const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const UserRrepository = require('../repository/userRepository');
const secretKey = process.env.JWT_SECRET_KEY;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secretKey,
};

passport.use(
  new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
    try {
      const user = await UserRrepository.findById(jwtPayload.userId);
      // console.log(`usser id: ${jwtPayload.userId}`);
      // console.log(`user :${user.username}`);

      if (!user) {
        console.log(`user not found`);

        return done(null, false); // User not found
      }
      console.log(`user found and authenticated`);
      return done(null, user); // User found and authenticated
    } catch (error) {
      console.log(`Error while fetching user`);
      return done(error, false); // Error while fetching user
    }
  })
);
console.log('Passport configuration is loaded.');
module.exports = passport;
