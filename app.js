const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello world!'));

app.use('/static', express.static('client/build/static'));

let port = 3000;
if (process.env.NODE_ENV === 'production') {
  port = 80;
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

