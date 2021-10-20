const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    nome_anime: String,
},{
    timestamps:true
}); 

const favoritos = mongoose.model('Favoritos', DataSchema);

module.exports = favoritos;