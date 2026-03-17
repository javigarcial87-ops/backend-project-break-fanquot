require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const Card = require("./models/Card")

const app = express()

app.use(cors())
app.use(express.json())

// 🔌 conectar a Mongo
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo conectado 🚀"))
  .catch(err => console.log("Error Mongo:", err))

// 🧪 ruta de prueba
app.get("/", (req, res) => {
  res.send("API FanQuot funcionando 🚀")
})

// 📥 GET cards (LO IMPORTANTE)
app.get("/cards", async (req, res) => {
  try {
    const cards = await Card.find()
    res.json(cards)
  } catch (error) {
    res.status(500).json({ error: "Error al obtener cards" })
  }
})

// 🚀 levantar servidor
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`)
})