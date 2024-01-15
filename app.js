const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Connect to MongoDB (local database)
mongoose.connect('mongodb://localhost/birthdayDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Define MongoDB schema
const birthdaySchema = new mongoose.Schema({
  name: String,
  date: String,
  month: String
});

const Birthday = mongoose.model('Birthday', birthdaySchema);

// Add sample data
const parshanth = new Birthday({
  name: 'Parshanth',
  date: '18',
  month: '05'
});

const dan = new Birthday({
  name: 'Dan',
  date: '17',
  month: '05'
});

parshanth.save();
dan.save();

// Serve static HTML page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
