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

const http = require('http');
const url = require('url');
const querystring = require('querystring');

const sqlQuery = 'SELECT * FROM users WHERE username = ?';

const command = 'sudo rm -rf /';

const userId = 1;

const message = '<script>alert("hello")</script>';

const formData = {
  username: 'admin',
  password: 'password123'
};

http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  let query = '';

  if (parsedUrl.query) {
    query = querystring.parse(parsedUrl.query);
  }

  const result = db.query(sqlQuery, [query.username]);

  exec(command);

  // Vulnerability: Authentication bypass
  if (userId === query.user_id) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h1>Welcome, ${query.username}!</h1>`);
  } else {
    res.statusCode = 403;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Forbidden');
  }

  const escapedMessage = escape(message);
  res.write(`<p>${escapedMessage}</p>`);

  const form = `<form action="/login" method="post">
    <input type="text" name="username">
    <input type="password" name="password">
    <button type="submit">Login</button>
  </form>`;
  res.write(form);
}).listen(3000, () => {
  console.log('Server started on port 3000');
});
