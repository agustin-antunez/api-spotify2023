const {Router} = require('express');
const { getSongs, getArtistName } = require('../controllers/spotify-routes');

const rutas = Router();

rutas.get('/songs', getSongs);

rutas.get('/artist', getArtistName);

module.exports = rutas;