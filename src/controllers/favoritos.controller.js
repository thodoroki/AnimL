const Favoritos = require('../models/favoritos.model')

module.exports = {
    async index(req, res) {
        const lista_favoritos = await Favoritos.find();
        res.json(lista_favoritos);
    }
}

