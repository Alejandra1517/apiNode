const express = require("express")

const cors = require("cors")

const { DBconection } = require('../public/db/config')


class Server {


    constructor(){

        this.app = express()
        this.port = process.env.PORT

        //Base de datos 
        this.DBmongo()


        //middleware
        this.middlewares()

        //rutas
        this.routes()


    }


    DBmongo(){

        DBconection()

    }


    middlewares(){

        //vistas accedidas por las rutas
        this.app.use( cors() )

        //datos retornados en json
        this.app.use( express.json() )

        //directorio
        this.app.use( express.static('public') )


    }


    routes(){

        this.app.use('/api/cotizaciones', require('../public/routes/cotizacion.routes'))


    }


    listen(){

        this.app.listen(this.port, () => {

            console.log('Corriendo en el puerto ' + this.port)


        })


    }




}


module.exports = Server
