const express = require('express');
const { spawn } = require('child_process');
const app = express();

app.get('/', (req, res) => res.send("✅ BL DRAGON -MD is Alive!"));

app.listen(3000, () => {
  console.log("Server running...");
  spawn('node', ['main.js'], { stdio: 'inherit' });
});
