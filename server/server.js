const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 8080;
const db = require('./queries.js')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  console.log("REQ.BODY:", req.body);
  let username = req.body.username;
  let password = req.body.password;

db.checkUsernamePassword(username, password).then((isCorrectPassword)=> {
    if (isCorrectPassword) {
    res.send({
      token: 'test123',
    });
  } else {
    res.status(400).end();
  }
})
});

// created new endpoint /newuser - creating new user
app.post('/newuser', (req, res) => {
  console.log('hitting the new user endpoint!', req.query)
  res.send('hit new user')
  // db.createNewUser(req.body).then((data) => {
  //   res.send('user added')
  // })
})

app.listen(PORT, () =>
  console.log(`API is running on http://localhost:${PORT}/login`)
);