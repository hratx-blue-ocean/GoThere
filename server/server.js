const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Server is connected!');
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})