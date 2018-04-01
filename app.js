const express = require('express');
const path = require('path');
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


// set up view engine
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


// routes
app.get('/', (req, res) => {
  let scriptPath = 'static/js/bundle.js';
  if (process.env.NODE_ENV !== "production") {
    scriptPath = 'http://192.168.99.100:8080/static/js/bundle.js';
  }
  res.render('index', {scriptPath});
});

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


// open port and start listening
let port = 3000;
if (process.env.NODE_ENV === 'production') {
  port = 80;
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

