const express = require('express');
require('dotenv').config()

const port = 8000;
const app = express();

app.set('json spaces', 2);

app.get('/', (req, res) => {
  res.json(
    {
      data: 'Here is JSON reply',
    }
  )
})

app.listen(port);
console.log(`Serving at http://localhost:${port}`);
