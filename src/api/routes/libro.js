const {
  getbook,
  postbook,
  deletebook,
  updateBook
} = require('../controllers/libro')

const Librorouter = require('express').Router()
Librorouter.get('/', getbook)
Librorouter.post('/', postbook)
Librorouter.put('/:id', updateBook)
Librorouter.delete('/:id', deletebook)
module.exports = Librorouter
