
const bcryptjs = require('bcryptjs')

const Cotizacion = require('../models/cotizacion.model')


const getCotizacion = async (req,res) => {


    const cotizaciones = await Cotizacion.find()


    res.json({

        "ok":200,
        cotizaciones


    })

}


const postCotizacion = async (req,res) => {

    const { cliente, estado, fechaVencimiento, fechaDuracion } = req.body

    const guardarCotizacion = new Cotizacion( { cliente, estado, fechaVencimiento, fechaDuracion } )

    guardarCotizacion.cliente = bcryptjs.hashSync(cliente, 10)

    await guardarCotizacion.save()

    res.json({

        "ok":200,
        "msg": "Cotización guardada correctamente",
        guardarCotizacion

    })


}


const putCotizacion = async (req,res) => {

    const id = req.params.id

    const cotizacion = req.body

    const modificarCotizacion = await Cotizacion.findByIdAndUpdate(id, cotizacion)

    res.json({

        "ok":200,
        "msg": "Cotización modificada correctamente"


    })



}


const deleteCotizacion = async (req,res) => {

    const id = req.params.id

    const eliminarCotizacion = await Cotizacion.findByIdAndDelete(id)

    res.json({

        "ok":200,
        "msg": "Cotización eliminada correctamente"

    })

}


module.exports = {

    getCotizacion,
    postCotizacion,
    putCotizacion,
    deleteCotizacion

}


