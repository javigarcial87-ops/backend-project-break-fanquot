const mongoose = require("mongoose")

const cardSchema = new mongoose.Schema({
  characterName: String,
  characterImage: String,
  mediaType: String,
  mediaTitle: String,
  quote: String,
  likes: Number,
  likedBy: [String]
})

module.exports = mongoose.model("Card", cardSchema)