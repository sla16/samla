const express = require('express');
const os = require('os');

const path = require('path');
const app = express();

const port = process.env.PORT || 8080;

app.use(express.static('dist'));

app.get('/api/hello', (req, res) => {
  res.send({ username: os.userInfo().username });
});

app.get('/', (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(`${__dirname}/client/src/public/index.html`));
});

app.listen(port, () => console.log(`Listening on port ${port}`));