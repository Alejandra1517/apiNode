const mongoose = require('mongoose')


const DBconection = async () => {


    try {
    
        mongoose.connect(process.env.DBCONNECTION_CNN)

        console.log("Conectado a la base de datos exitosamente")

    } catch (error) {
        console.log("Error al conectarse a la base de datos" + error)
    }



}



module.exports = { 

    DBconection

}