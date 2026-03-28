const express = require("express")
const router  = express.Router()
const {getCards, createCard, deleteCard, likeCard, updateCard} = require("../controllers/cardController")


router.get("/",getCards)
router.post("/",createCard)
router.delete("/:id", deleteCard)
router.put("/like/:id", likeCard)
router.put("/:id", updateCard)

module.exports = router