import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Login API
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Missing username or password' });
  }

  const usersPath = path.join(__dirname, 'users.json');
  if (!fs.existsSync(usersPath)) {
    return res.status(500).json({ success: false, message: 'User database not found' });
  }

  const usersData = fs.readFileSync(usersPath, 'utf-8');
  const users = JSON.parse(usersData);

  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    return res.json({ success: true });
  } else {
    return res.status(401).json({ success: false, message: 'Invalid username or password' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
