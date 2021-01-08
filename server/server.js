const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const PORT = 8080;
const db = require('./queries.js');
// needed for yelp API calls
const YELP_API_KEY = require('./API.js');
const yelp = require('yelp-fusion');
const client = yelp.client(YELP_API_KEY);
const axios = require('axios');

app.use(express.static(__dirname + '/../client/src'));

// TODO: check to see if this works on production!
//       that is, on a url other than localhost...
// See this stackoverflow comment:
// https://stackoverflow.com/questions/43002444/make-axios-send-cookies-in-its-requests-automatically
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// yelp api calls
app.get('/attractions', (req, res) => {
	const yelp = require('yelp-fusion');
	const client = yelp.client(YELP_API_KEY);

	client
		.search({
			term: req.query.term,
			location: req.query.location,
		})
		.then((response) => {
			console.log('RQUEST', req);
			res.send(response.jsonBody.businesses);
		})
		.catch((e) => {
			console.log(e);
		});
});

//  database query calls

app.post('/login', (req, res) => {
	console.log('REQ.BODY:', req.body);
	console.log('req.cookies:', req.cookies);
	let email = req.body.email;

	let password = req.body.password;

	db.checkUsernamePassword(username, password).then((isCorrectPassword) => {
		if (isCorrectPassword) {
      console.log('Correct Password entered');
      res.cookie('loggedIn', 'true', {maxAge: 1000*60*60*24*7, secure: false});
      res.cookie('email', email, {maxAge: 1000*60*60*24*7, secure: false});
      res.send('cookie set');
		} else {
      console.log('no matching email/password found in database')
			res.status(400).end();
		}
	});
});

// created new endpoint /newuser - creating new user
app.post('/newuser', (req, res) => {

	db.createNewUser(req.query, (err, data) => {
		if (err) {
			console.log(err);
		} else {
			res.json('User has been added to the database!');
		}
	});
});

//for adding a new trip to the database
app.post('/trips', (req, res) => {

  db.createNewTrip(req, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json('Trip has been added to the database!');
    }
  })

})

// get user trips
app.get('/trips' , (req, res) => {
  db.getTrip(req.query, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('results!', data)
      res.json(data.rows[0]);
    }
  })

})
// get user favorites
app.get('/favorites' , (req, res) => {
  db.getFavorites(req.query, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('results!', data)
      res.json(data.rows[0]);
    }
  })
})


app.listen(PORT, () =>
	console.log(`API is running on http://localhost:${PORT}/`)
);
