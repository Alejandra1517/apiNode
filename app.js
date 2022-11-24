
//Configuración de las variables de entorno
require('dotenv').config()

//Importar clase server
const Server = require('./source/server')

//Crear objeto de la clase server
const server = new Server()


//Acceder al método listen de la clase server
server.listen()
