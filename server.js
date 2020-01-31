const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const items = require('./routes/api/items');

const app = express();

//(1) Use Body Parser
app.use(bodyParser.json());

//(2) MongoDB config
const db = require('./config/keys').mongoURI;

//(3) config MongoDB URI config/keys.js

//(4) Connect mongodb
mongoose
  .connect(db)
  .then(() => console.log('Connected'))
  .catch(err => console.log(err));

//(6) Create UR Mongoose Model models/item

//(7) Create API Route

//(8) Use API Route
app.use('/api/items', items);

// (9) Seve Static asset if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//(5) Run the server (create port to HEROKU)
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
