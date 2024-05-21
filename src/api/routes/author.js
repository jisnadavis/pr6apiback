const {
  getauthor,
  postauthor,
  updateauthor,
  deleteauthor
} = require('../controllers/autoer')

const Authorrouter = require('express').Router()
Authorrouter.get('/', getauthor)
Authorrouter.post('/', postauthor)
Authorrouter.put('/:id', updateauthor)
Authorrouter.delete('/:id', deleteauthor)
module.exports = Authorrouter
