const Card = require("../models/Card")

//Get
const getCards = async (req, res) => {
  try {
    const cards = await Card.find()
    res.json(cards)
  } catch (error) {
    res.status(500).json({ error: "Error al obtener cards" })
  }
}

//Post
const createCard = async (req, res) => {
  try {
    console.log("BODY RECIBIDO:", req.body)

    const newCard = new Card(req.body) // 👈 PRIMERO crear

    await newCard.save() // 👈 LUEGO guardar

    console.log("CARD GUARDADA:", newCard) // 👈 AHORA sí usarla

    res.status(201).json(newCard)

  } catch (error) {
    console.error("ERROR BACKEND:", error)
    res.status(500).json({ error: "Error al crear card" })
  }
}

module.exports = {
    getCards,
    createCard
}