const mongoose = require('mongoose')
const authorschema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    second_name: { type: String, required: true },
    number_books_published: { type: Number, required: true }
  },
  { timestamps: true }
)
const Author = mongoose.model('authors', authorschema, 'authors')
module.exports = Author
