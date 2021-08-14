const mongoose = require('mongoose')
const Titulo = require('../models/titulo')

const getAllMarvel = async (req, res) => {
    const titulos = await Titulo.find().populate('estudio')
    const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome == "Marvel")
    res.json(titulosFiltrados)
  }

const getAllGhibli = async (req, res) => {
    const titulos = await Titulo.find().populate('estudio')
    const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome == "Ghibli")
    res.json(titulosFiltrados)
  }

const getAllPixar = async (req, res) => {
  const titulos = await Titulo.find().populate('estudio')
  const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome == "Pixar")
  res.json(titulosFiltrados)
}

const getAll = async (req, res) => {
  const titulos = await Titulo.find().populate('estudio')
  res.status(200).json(titulos)
}

const createTitle = async (req, res) => {
  const titulo = new Titulo({
    _id: new mongoose.Types.ObjectId(),
    nome: req.body.nome,
    genero: req.body.genero,
    descricao: req.body.descricao,
    estudio: req.body.estudio,
    criadoEm: req.body.criadoEm
  })
  //TODO : criar validação se filme já existe
  try {
    const novoTitulo = await titulo.save()
    res.status(201).json(novoTitulo)
  } catch (err) {
    res.status(400).json({ message: err.message})
  }
}

const updateOne = async(req, res) => {
  
    try {
      //Tenta encontrar um titulo pelo id
      const titulo = await Titulo.findById(req.params.id)
      //Se você não encontrar me retorne o erro
      if (titulo == null) {
        return res.status(404).json({message: "titulo não encontrado"})
      }
      //No corpo da requisição tem algo digitado, considere o que tiver digitado como minha alteração
      if (req.body.descricao != null) {
        titulo.nome = req.body.nome
        titulo.genero = req.body.genero
        titulo.descricao = req.body.descricao
      }

      if (req.body.nome != null) {
        titulo.nome = req.body.nome
        }

        if (req.body.genero != null) {
            titulo.genero = req.body.genero
            }
    
      //Já salvou?
      const tituloAtualizado = await titulo.save()
      //Retornando o documento atualizado com o código de sucesso
      res.status(200).json(tituloAtualizado)
  
    } catch (err) {
      //Se houve qulquer erro acima, mostre qual erro foi esse 
      res.status(500).json({message: err.message})
    }
  }

module.exports = {
  getAll,
  createTitle,
  getAllMarvel,
  getAllGhibli,
  getAllPixar,
  updateOne
}