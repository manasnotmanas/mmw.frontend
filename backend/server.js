const express = require('express');
const cors = require('cors');  // Import the CORS package
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Enable CORS for all routes
app.use(cors());

app.use(bodyParser.json());

// POST route to save contact form data
app.post('/api/contact', (req, res) => {
  const { name, number, email } = req.body;

  if (!name || !number || !email) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const contactData = { name, number, email };
  fs.appendFile('contacts.json', JSON.stringify(contactData) + '\n', (err) => {
    if (err) {
      console.error('Error saving data:', err);
      return res.status(500).json({ message: 'Error saving data' });
    }
    res.status(200).json({ message: 'Message sent successfully!' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
