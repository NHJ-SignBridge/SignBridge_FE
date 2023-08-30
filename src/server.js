const express = require('express');
const { spawn } = require('child_process');
const app = express();
const port = 3000; // You can use any port you prefer

app.use(express.static('src'));

app.get('/run-python', (req, res) => {
  const pythonProcess = spawn('python', ['skip.py']);

  pythonProcess.stdout.on('data', (data) => {
    console.log(`Python Output: ${data}`);
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(`Python Error: ${data}`);
  });

  pythonProcess.on('close', (code) => {
    console.log(`Python process exited with code ${code}`);
  });

  res.send('Running Python script...');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
