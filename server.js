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
    return res.status(400).json({ success: false, message: 'Username & password required' });
  }

  const usersPath = path.join(__dirname, 'users.json');

  if (!fs.existsSync(usersPath)) {
    return res.status(500).json({ success: false, message: 'User data missing' });
  }

  try {
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      return res.json({ success: true });
    } else {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch {
    return res.status(500).json({ success: false, message: 'Server error reading user data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
