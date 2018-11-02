const express = require('express');
const app = express();

// use curl localhost:3000/block and curl localhost:3000 simultaniously.
// As block is infinite for loop it will never end so localhost:3000
// won't be called.
app.get('/', (req, res) => {
  res.send('Hello World');
})

app.get('/block', (req, res) => {
  for (;;) {
  }
});

app.listen(3000, () => console.log('At 3000'));