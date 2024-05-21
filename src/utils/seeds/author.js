const mongoose = require('mongoose')
const Author = require('../../api/modelos/autoer')
const authors = require('../../data/author')
const runseed = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://jisnadavis93:kdcDj64dJQhHCHJ4@cluster0.blhsqy5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
    await Author.collection.drop()
    console.log('authors deleted')
    await Author.insertMany(authors)
    console.log('authors inserted')
    await mongoose.disconnect()
  } catch (error) {
    console.log(error)
  }
}
runseed()
