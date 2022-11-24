const { Router } = require('express')

const { getCotizacion, postCotizacion, putCotizacion, deleteCotizacion } = require('../controllers/cotizacion.controller')

const route = Router()

route.get('/', getCotizacion)
route.post('/', postCotizacion)
route.put('/:id', putCotizacion)
route.delete('/:id', deleteCotizacion)


module.exports = route

