const Libro = require('../modelos/libro')
const mongoose = require('mongoose')

const getbook = async (req, res, next) => {
  try {
    const bookssaved = await Libro.find().populate('name_author')
    return res.status(200).json(bookssaved)
  } catch (error) {
    return res.status(400).json('error')
  }
}
const postbook = async (req, res, next) => {
  try {
    const newlibro = new Libro(req.body)
    const librosaved = await newlibro.save()
    return res.status(201).json(librosaved)
  } catch (error) {
    return res.status(400).json('error')
  }
}
const updateBook = async (req, res, next) => {
  try {
    const { id } = req.params
    const { nombre_de_libro, year_published, name_author } = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid book ID' })
    }
    const updateFields = {}
    if (nombre_de_libro) updateFields.nombre_de_libro = nombre_de_libro
    if (year_published) updateFields.year_published = year_published

    const updatedBook = await Libro.findByIdAndUpdate(
      id,
      { $set: updateFields },
      { new: true, runValidators: true }
    )

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' })
    }

    if (name_author && name_author.length) {
      await Libro.findByIdAndUpdate(
        id,
        { $addToSet: { name_author: { $each: name_author } } },
        { new: true, runValidators: true }
      )
    }

    return res.status(200).json({
      message: 'Book updated successfully',
      element: updatedBook
    })
  } catch (error) {
    console.error('Error updating book:', error)
    return res.status(500).json({ message: 'Error updating book', error })
  }
}

const deleteAuthorFromBook = async (req, res, next) => {
  try {
    const { bookId, authorId } = req.params

    if (
      !mongoose.Types.ObjectId.isValid(bookId) ||
      !mongoose.Types.ObjectId.isValid(authorId)
    ) {
      return res.status(400).json({ message: 'Invalid book ID or author ID' })
    }

    const updatedBook = await Libro.findByIdAndUpdate(
      bookId,
      { $pull: { name_author: authorId } },
      { new: true }
    )

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' })
    }

    return res.status(200).json({
      message: 'Author removed from book successfully',
      element: updatedBook
    })
  } catch (error) {
    console.log(error)
    console.error('Error removing author from book:', error)
    return res
      .status(500)
      .json({ message: 'Error removing author from book', error })
  }
}

const deletebook = async (req, res, next) => {
  try {
    const { id } = req.params
    const librodeleted = await Libro.findByIdAndDelete(id)
    return res.status(200).json({
      message: 'libro deleted',
      elemento: librodeleted
    })
  } catch (error) {
    return res.status(400).json('error')
  }
}
module.exports = {
  getbook,
  postbook,
  updateBook,
  deleteAuthorFromBook,
  deletebook
}
