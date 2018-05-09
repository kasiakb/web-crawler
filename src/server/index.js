const express = require('express');
require('dotenv').config()

const port = 8000;
const app = express();
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const cors = require('cors')
const bodyParser = require('body-parser');
app.use(bodyParser.json());


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile.displayName);
  }
));

app.use(cors())
app.use(passport.initialize());
app.use(passport.session());

app.set('json spaces', 2);

app.get('/', (req, res) => { // url: http://localhost:8000
  res.json(
    {
      data: 'Here is JSON reply',
    }
  )
})

app.get('/siteAnalyses', (req, res) => { // url: http://localhost:8000/siteAnalyses
  res.json(
    {
      data: [
        {
          type: "siteAnalysis",
          id: 1,
          attributes: {
            updatedAt: "2018-05-04T10:46:25.062Z",
            title: "Our main page",
            url: "http://dupa.com",
            status: "pending"
          }
        }, {
          type: "siteAnalysis",
          id: 2,
          attributes: {
            updatedAt: "2018-05-04T10:46:25.062Z",
            title: "Our second page",
            url: "http://dupa.com/second",
            status: "pending"
          }
        }
      ]
    }
  )
})

app.post('/siteAnalyses', (req, res) => { // url: http://localhost:8000/siteAnalyses
  console.log(req.body)
  res.json(
    {
      data: [
        {
          type: 'siteAnalysis',
          id: 123,
          attributes: {
            updatedAt: + new Date(),
            title: req.body.title,
            url: req.body.url,
            status: 'pending'
          }
        }
      ]
    }
  )
})

app.delete('/siteAnalyses/:id' , (req, res) => { // url: http://localhost:8000/siteAnalyses
  if(req.params.id > 100) {
    console.log('returning 404')
    res.status(404).send('Record not found')
  } else {
    console.log('returning 204')
    res.status(204).send('Done')
  }
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
