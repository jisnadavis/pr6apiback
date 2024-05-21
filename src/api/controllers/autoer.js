const Author = require('../modelos/autoer')

const getauthor = async (req, res, next) => {
  try {
    const author = await Author.find()
    return res.status(200).json(author)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}
const postauthor = async (req, res, next) => {
  try {
    const newauthor = new Author(req.body)
    const authorsaved = await newauthor.save()
    return res.status(201).json(authorsaved)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}
const updateauthor = async (req, res, next) => {
  try {
    const { id } = req.params
    const newauthor = new Author(req.body)
    newauthor._id = id
    const authorupdated = await Author.findByIdAndUpdate(id, newauthor, {
      new: true
    })
    return res.status(200).json(authorupdated)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const deleteauthor = async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedauthor = await Author.findByIdAndDelete(id)
    return res.status(200).json({
      message: 'author deleted',
      elemento: deletedauthor
    })
  } catch (error) {
    console.error('Error deleting author:', error)
    return res.status(400).json('error')
  }
}

module.exports = {
  deleteauthor
}

module.exports = { getauthor, postauthor, updateauthor, deleteauthor }
