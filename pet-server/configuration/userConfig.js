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
      const user = await UserRrepository.findById(jwtPayload.sub);

      if (!user) {
        return done(null, false); // User not found
      }

      return done(null, user); // User found and authenticated
    } catch (error) {
      return done(error, false); // Error while fetching user
    }
  })
);

module.exports = passport;
