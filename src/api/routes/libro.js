const {
  getbook,
  postbook,
  deletebook,
  updateBook,
  deleteAuthorFromBook
} = require('../controllers/libro')

const Librorouter = require('express').Router()
Librorouter.get('/', getbook)
Librorouter.post('/', postbook)
Librorouter.put('/:id', updateBook)
Librorouter.delete('/:bookId/:authorId', deleteAuthorFromBook)
Librorouter.delete('/:id', deletebook)
module.exports = Librorouter
