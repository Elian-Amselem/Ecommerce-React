const express = require('express');
const api = express.Router();
const upload = require('../libs/storage');

const {addJuego, getJuegos, findJuegos, updateJuegos, deleteJuegos} = require('../controllers/juegosControllers');

api.get('/juegos', getJuegos );
api.post('/juegos', upload.single('imagen'), addJuego);
api.get('/juegos/:id', findJuegos);
api.put('/juegos/:id', upload.single('imagen'), updateJuegos);
api.delete('/juegos/:id', deleteJuegos);

module.exports = api;


