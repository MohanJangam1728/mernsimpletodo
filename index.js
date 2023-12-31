// backend/index.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todos');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());


const uri = process.env.MONGO_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
//   useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Routes will be added here
app.use(cors());
app.use('/todos', todoRoutes);
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
