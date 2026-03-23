const Card = require("../models/Card")

//GET obtener las cards y mostrarlas
const getCards = async (req, res) => {
  try {
    const cards = await Card.find().sort({createdAt:-1})
    res.json(cards)
  } catch (error) {
    res.status(500).json({ error: "Error al obtener cards" })
  }
}

//POST Crear una nueva card
const createCard = async (req, res) => {
  try {
    console.log("BODY RECIBIDO:", req.body)

    const newCard = new Card(req.body) 

    await newCard.save() 

    console.log("CARD GUARDADA:", newCard) 

    res.status(201).json(newCard)

  } catch (error) {
    console.error("ERROR BACKEND:", error)
    res.status(500).json({ error: "Error al crear card" })
  }
}

//DELETE Borrar cards
const deleteCard = async (req, res)=>{
  try {
    const {id} = req.params
    await Card.findByIdAndDelete(id)
    res.json({message:"Card eliminada con exito"})
  } catch (error) {
    console.error(error)
    res.status(500).json({error: "Error al eliminar la card"})
  }
}

module.exports = {
    getCards,
    createCard,
    deleteCard
}