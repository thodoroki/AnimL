const Favoritos = require('../models/favoritos.model')

module.exports = {
    async index(req, res) {
        const lista_favoritos = await Favoritos.find();
        res.json(lista_favoritos);
    },
    async create(req, res){
        const { nome_anime } = req.body;

        let data = {};
        let anime = await Favoritos.findOne({nome_anime});
        if(!anime){
            data = {nome_anime};
            anime = await Favoritos.create(data);
            return res.status(200).json(anime);
        }else{
            return res.status(500).json(anime);
        }
    },
    async delete(req, res){
        const { _id } = req.params.Favoritos

        const anime = await Favoritos.findByIdAndDeletei({ _id });

        return res.json(anime);
    }
}

