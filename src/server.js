const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));


app.post('/echo', (req, res) => {
  const userInput = req.body.name;

  res.send(`Hello, ${userInput}!`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
