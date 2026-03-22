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
const createCard = async(req, res)=>{
    try {
        const newCard = newCard(req.body)
        await newCard.save()

        res.status(201).json(newCard)
    } catch (error){
        res.status(500).json({error: "Error al crear la card"})
    }
}

module.exports = {
    getCards,
    createCard
}