const mongoose = require('mongoose');
const { appConfig } = require('../config');

const juegoSchema = new mongoose.Schema(
    {
        nombre: String,
        imagen: String,
        descripcion: String,
        lanzamiento: String,
        plataformas: Array
    },
    {
        timestamps: true
    }

);

juegoSchema.methods.setImagen = function setImagen(filename){
    const { host, port } = appConfig;
    this.imagen = `${host}:${port}/public/${filename}`
}

const Juego = mongoose.model('juego', juegoSchema);

module.exports = Juego;
