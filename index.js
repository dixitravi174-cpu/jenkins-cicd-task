const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello! Mera CI/CD Pipeline kaam kar raha hai!');
});

app.listen(3000, () => {
  console.log('App port 3000 par chal raha hai');
});