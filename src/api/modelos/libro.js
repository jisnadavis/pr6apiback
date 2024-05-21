const mongoose = require('mongoose')
const libroschema = new mongoose.Schema(
  {
    nombre_de_libro: { type: String, required: true },
    yerar_published: { type: Number, required: true },
    name_author: [{ type: mongoose.Types.ObjectId, ref: 'authors' }]
  },
  { timestamps: true }
)

const Libro = mongoose.model('libros', libroschema, 'libros')
module.exports = Libro
