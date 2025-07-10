const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.get('/', (req, res) => {
  res.send('✅ Root is working');
});

app.get('/logs', (req, res) => {
  const logPath = path.join(__dirname, 'logs', 'error-log.txt');
  fs.readFile(logPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send(`<pre>${err.message}</pre>`);
    }
    res.send(`<h2>📝 Log</h2><pre>${data}</pre>`);
  });
});

app.listen(8000, () => {
  console.log('✅ Log Viewer running at http://localhost:8000/logs');
});

app.get('/', (req, res) => {
  res.send('✅ Server is working');
});