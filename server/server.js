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

  if (username === 'admin' && password === 'password') {
    res.send({
      token: 'test123',
    });
  } else {
    res.status(400).end();
  }
});

app.listen(PORT, () =>
  console.log(`API is running on http://localhost:${PORT}/login`)
);