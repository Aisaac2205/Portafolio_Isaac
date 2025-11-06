#!/usr/bin/env node
import { spawn } from 'child_process';

const port = process.env.PORT || '4173';
const host = '0.0.0.0';

console.log(`Starting Vite preview server on ${host}:${port}...`);

const vite = spawn('npx', ['vite', 'preview', '--host', host, '--port', port], {
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, PORT: port }
});

vite.on('error', (error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});

vite.on('exit', (code) => {
  process.exit(code || 0);
});

