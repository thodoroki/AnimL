const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    nome_anime: String,
    poster: String,
    id_original: String,
    start: Date,
    end: Date
},{
    timestamps:true
}); 

const favoritos = mongoose.model('Favoritos', DataSchema);

module.exports = favoritos;