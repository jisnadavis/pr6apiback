require('dotenv').config()
const express = require('express')

const { connectdb } = require('./src/config/db')
const Authorrouter = require('./src/api/routes/author')
const Librorouter = require('./src/api/routes/libro')

const app = express()
connectdb()
app.use(express.json())
app.use('/api/v1/authors', Authorrouter)
app.use('/api/v1/libro', Librorouter)
app.listen(3000, () => {
  console.log('http://localhost:3000')
})
