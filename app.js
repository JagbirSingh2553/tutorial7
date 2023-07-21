const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// MongoDB Atlas connection
mongoose.connect('mongodb://atlas-sql-64ac457dbdd80461c416c2da-op2e8.a.query.mongodb.net/csci5709?ssl=true&authSource=admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Error connecting to MongoDB Atlas:', err));

// Parse incoming requests data (middleware)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
