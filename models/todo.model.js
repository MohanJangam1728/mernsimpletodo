// backend/models/todo.model.js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  description: { type: String, required: true },
}, {
  timestamps: true,
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
