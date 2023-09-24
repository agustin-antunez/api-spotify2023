const express = require('express');
class Server {
    constructor() {
        this.port = process.env.PORT || 4000;

        this.app = express();

        this.middleware();

        this.routes();

    }

    middleware(){
        this.app.use(express.static('public'));
    }

    routes(){
        /*
        this.app.get('/', (req, res) => {
            res.send('Hello World!')
          });
          */

        this.app.use('/api/v1/spotify', require('../routes/spotify-routes'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`escuchando en el puerto ${this.port}`)
          });
    }
}

module.exports = Server;

