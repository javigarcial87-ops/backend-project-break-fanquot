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

//LIKES 
const likeCard = async (req, res) => {
  try {
    const { id } = req.params
    const { userId } = req.body

    const card = await Card.findById(id)

    if (!card) {
      return res.status(404).json({ error: "Card no encontrada" })
    }

    
    if (!card.likedBy) {
      card.likedBy = []
    }

    const alreadyLiked = card.likedBy.some(
      (uid) => uid.toString() === userId
    )

    if (alreadyLiked) {
      
      card.likedBy = card.likedBy.filter(
        (uid) => uid.toString() !== userId
      )
    } else {
      
      card.likedBy.push(userId)
    }

   
    card.likes = card.likedBy.length

    await card.save()

    res.json(card)

  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Error al dar like" })
  }
}

module.exports = {
    getCards,
    createCard,
    deleteCard,
    likeCard
}