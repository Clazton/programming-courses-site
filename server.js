import express from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

// Setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// === Login Endpoint ===
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const users = JSON.parse(fs.readFileSync('users.json', 'utf8'));

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (user) {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// === Save Quiz Result ===
app.post('/api/save-result', (req, res) => {
  const { username, course, score, total } = req.body;

  if (!username || !course || typeof score !== 'number' || typeof total !== 'number') {
    return res.status(400).json({ success: false, message: 'Invalid data format' });
  }

  let results = [];

  try {
    const data = fs.readFileSync('results.json', 'utf8');
    results = JSON.parse(data);
  } catch (err) {
    // File may not exist or be empty
    results = [];
  }

  const resultEntry = {
    username,
    course,
    score,
    total,
    timestamp: Date.now()
  };

  results.push(resultEntry);

  try {
    fs.writeFileSync('results.json', JSON.stringify(results, null, 2));
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to save result' });
  }
});

// === Get All Quiz Results (filtered on frontend by user) ===
app.get('/api/results', (req, res) => {
  try {
    const data = fs.readFileSync('results.json', 'utf8');
    const results = JSON.parse(data);
    res.json(results);
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to read results' });
  }
});

// === Start Server ===
app.listen(PORT, () => {
  console.log(`🚀 Server running at: http://localhost:${PORT}`);
});
