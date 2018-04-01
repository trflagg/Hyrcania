const express = require('express');
const app = express();

const Db = require('argieDB/db');


// Connect to DB
console.log('Connecting to DB');
environment = require('./db-environment-default.js');
if (process.env.DB_ENV === 'compose') {
    environment = require('./db-environment-compose.js');
}
// hide the username:password in the URL string
console.log('db URL: '+environment.db.URL.replace(/:\/\/.*:(.*)@/, 'XXXXXXX'));
const db = new Db(environment);
db.connect();
console.log('Connected.');


// load models
const Message = require('argie/models/message')(db);

// routes
app.get('/', (req, res) => res.send('Hyrcania!'));

app.use('/static', express.static('client/build/static'));

app.get('/new', (req, res) => {
  let newMessage = db.create('Message');

  newMessage.setName('TEST1');
  newMessage.setText('Hello world');

  db.save('Message', newMessage).then(() => {
    res.send('New Message created');
  });
});

app.get('/messages', (req, res) => {
  db.loadMultiple('Message', {}).then(results => {
    res.send(results);
  }).catch(e => { res.send(e); });
});

let port = 3000;
if (process.env.NODE_ENV === 'production') {
  port = 80;
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

