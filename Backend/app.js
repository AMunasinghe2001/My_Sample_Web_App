const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./model/Model');
const userRoutes = require('./routes/Routes'); // Updated import

const app = express();
const port = 5001; // Changed port number

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb+srv://Anushanga:Anushanga2001@cluster0.4d2u3vi.mongodb.net", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to the database'))
  .catch((error) => console.error('Failed to connect to the database:', error));

// Routes
app.use('/users', userRoutes); // Use the correct route file

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
