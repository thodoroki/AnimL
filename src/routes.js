const express = require('express');
const Favorito = require('./controllers/favoritos.controller')

const routes = express.Router();

routes.get('/', Favorito.index);

routes.get('/api/favoritos', Favorito.index);

routes.post('/api/favoritos', Favorito.create);

//routes.delete('/api/favoritos/:_id', Favorito.delete());

module.exports = routes;