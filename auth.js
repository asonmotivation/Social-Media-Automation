const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./user');

passport.use(new LocalStrategy({
      usernameField: 'username',
      passwordField: 'password'
}, (username, password, done) => {
      User.findOne({ username: username }, (err, user) => {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.comparePassword(password)) { return done(null, false); }
            return done(null, user);
      });
}));

passport.serializeUser((user, done) => {
      done(null, (link unavailable));
});

passport.deserializeUser((id, done) => {
      User.findById(id, (err, user) => {
            done(err, user);
      });
});

module.exports = passport;