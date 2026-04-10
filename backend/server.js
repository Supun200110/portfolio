const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'API is running beautifully.' });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // In a real application, you would send an email or save to a database here.
  console.log('Received contact message:', { name, email, message });
  
  res.status(200).json({ success: true, message: 'Message received successfully!' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
