const { Schema, model } = require('mongoose')


const cotizacionModel = new Schema({


    id:{
        type:Number,
        uniqued: true
    },
    
    cliente:{

        type:String,
        required:['Este campo es requerido']

    },

    estado:{

        type:Boolean,
        required:['Este campo es requirido']

    },


    fechaRegistro:{

        type:String

    },

    fechaVencimiento:{

        type:String

    }






})

module.exports = model('cotizacion', cotizacionModel)

