const express = require('express');
const { spawn } = require('child_process');
const http = require('http');
const app = express();

const projects = {
  'my-app': {
    path: 'C:\\Users\\saumi\\OneDrive\\Documents\\Nodejs\\my-app',
    cmd: 'npm',
    args: ['run', 'dev'],
    port: 5173
  },
  'web-demo': {
    path: 'C:\\Users\\saumi\\OneDrive\\Documents\\Nodejs\\web-demo',
    cmd: 'npm',
    args: ['start'],
    port: 3000,
    env: { BROWSER: 'none', CI: 'true' }
  }
};

const runningProcesses = {};

app.use(express.static(__dirname));

app.get('/run/:name', (req, res) => {
  const proj = projects[req.params.name];
  if (!proj) return res.status(404).send('Not found');

  if (!runningProcesses[req.params.name]) {
    const child = spawn(`${proj.cmd} ${proj.args.join(' ')}`, {
      cwd: proj.path,
      shell: true,
      windowsHide: true,
      stdio: 'ignore',
      env: { ...process.env, ...(proj.env || {}) }
    });
    runningProcesses[req.params.name] = child;
  }

  res.json({ status: 'starting', port: proj.port });
});

app.get('/check/:name', (req, res) => {
  const proj = projects[req.params.name];
  if (!proj) return res.status(404).json({ ready: false });

  const reqCheck = http.get(`http://localhost:${proj.port}`, () => {
    res.json({ ready: true, port: proj.port });
  });
  reqCheck.on('error', () => {
    res.json({ ready: false });
  });
});

app.listen(5000, () => console.log('Launcher running at http://localhost:5000'));