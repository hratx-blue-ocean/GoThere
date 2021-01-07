const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 8080;
const db = require('./queries.js');
// needed for yelp API calls
const API_KEYS = require('./API.js');
const yelp = require('yelp-fusion');
const client = yelp.client(API_KEY);
const axios = require('axios');

app.use(express.static(__dirname + '/../client/src'));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// yelp api calls
app.get('/attractions', (req, res) => {
	const yelp = require('yelp-fusion');
	const client = yelp.client(API_KEYS.YELP_API_KEY);

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
	let username = req.body.username;
	let password = req.body.password;

	db.checkUsernamePassword(username, password).then((isCorrectPassword) => {
		if (isCorrectPassword) {
			res.send({
				token: 'test123',
			});
		} else {
			res.status(400).end();
		}
	});
});

// created new endpoint /newuser - creating new user
app.post('/newuser', (req, res) => {
	console.log('hitting the new user endpoint!', req.query);

	db.createNewUser(req.query).then((data) => {
		res.send('user added');
	});
});

//using trips for now
app.post('/trips', (req, res) => {
	console.log('hitting the newtrip endpoint!', req.query);

	db.createNewTrip(req.query).then((data) => {
		res.send('user added');
	});
});

app.listen(PORT, () =>
	console.log(`API is running on http://localhost:${PORT}/login`)
);
