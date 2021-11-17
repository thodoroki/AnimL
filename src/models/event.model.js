const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    dateEvent: Date,
    title: String
}); 

const Event = mongoose.model('Event', DataSchema);

module.exports = favoritos;