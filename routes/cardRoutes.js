const express = require("express")
const router  = express.Router()

const {getCards, createCard, deleteCard} = require("../controllers/cardController")
router.get("/",getCards)
router.post("/",createCard)
router.delete("/:id", deleteCard)

module.exports = router