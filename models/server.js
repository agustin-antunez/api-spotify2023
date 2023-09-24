const express = require('express');
class Server {
    constructor() {
        this.port = process.env.PORT || 4000;

        this.app = express();

        this.routes();

    }

    routes(){
        this.app.get('/', (req, res) => {
            res.send('Hello World!')
          });

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`escuchando en el puerto ${this.port}`)
          });
    }
}

module.exports = Server;

