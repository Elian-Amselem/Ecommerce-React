const Juego = require('../models/Juegos');

async function addJuego(req, res){
    try{
        const {nombre, imagen, descripcion, lanzamiento, plataformas} = req.body;

        const juego = Juego({
            nombre,
            imagen,
            descripcion,
            lanzamiento,
            plataformas
        });

        if(req.file){
            const { filename } = req.file;
            juego.setImagen(filename);
        }

        const juegos = await juego.save();
        res.status(201).send({ juegos })
    }
    catch (e) {
        res.status(500).send({message: e.message})
    }
}

async function getJuegos(req, res) {
    try{
        const juegos = await Juego.find().limit(6);
        res.status(200).send({juegos});
    }
    catch (e) {
        res.status(500).send({message: e.message})
    }
}

async function findJuegos (req, res){
    try{
    const juegos = await Juego.findById(req.params.id)
    res.status(200).send({juegos})
    }
    catch (e) {
        res.status(500).send({message: e.message})
    }
}

async function updateJuegos(req, res){
    try{
        const juegos = await Juego.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.status(200).send({juegos})
    }
    catch (e) {
        res.status(500).send({message: e.message})
    }
}

async function deleteJuegos(req, res){
    try{
        const juego = await Juego.findByIdAndDelete(req.params.id);
        if(!juego){
            return res.status(404).send({ message: 'Juego no encontrado' });
        }
        res.status(200).send({message: 'Juego eliminado exitosamente'});
    }
    catch (e) {
        res.status(500).send({message: e.message})
    }
}

module.exports = {addJuego, getJuegos, findJuegos, updateJuegos, deleteJuegos};
