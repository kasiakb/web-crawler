const express = require('express');
require('dotenv').config()

const port = 8000;
const app = express();
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile.displayName);
  }
));

app.use(passport.initialize());
app.use(passport.session());

app.set('json spaces', 2);

app.get('/', (req, res) => {
  res.json(
    {
      data: 'Here is JSON reply',
    }
  )
})

app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: '/login' }),
  function(req, res) {
    console.log('req', req)
    res.redirect('http://localhost:3000');
  });

app.listen(port);
console.log(`Serving at http://localhost:${port}`);
