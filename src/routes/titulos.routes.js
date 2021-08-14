const express = require('express')
const router = express.Router()
const controller = require('../controllers/tituloController')

//listar todos os titulos da Pixar
router.get('/pixar', controller.getAllPixar)

//listar todos os titulos da Marvel
router.get('/marvel', controller.getAllMarvel)

//listar todos os titulos da Ghibli
router.get('/ghibli', controller.getAllGhibli)

//listar todos os titulos/get/find
router.get('/', controller.getAll)

//criar um novo titulo/post/save
router.post('/', controller.createTitle)

//listar um titulo/get/findById

//atualizar uma informacao especifica num titulo/patch/findById/save
router.patch('/:id', controller.updateOne)

//deletar um titulo/delete/findById/remove

module.exports = router