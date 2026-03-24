const express = require("express")
const router  = express.Router()
const {likeCard} = require("../controllers/cardController")

const {getCards, createCard, deleteCard} = require("../controllers/cardController")
router.get("/",getCards)
router.post("/",createCard)
router.delete("/:id", deleteCard)
router.put("/like/:id", likeCard)


module.exports = router