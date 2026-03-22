require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const cardRoutes = require("./routes/cardRoutes")

const app = express()

app.use(cors())
app.use(express.json())

//conectar Mongo
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo conectado 🚀"))
  .catch(err => console.log("Error Mongo:", err))

//ruta base
app.get("/", (req, res) => {
  res.send("API FanQuot funcionando")
})

//rutas moduladas
app.use("/cards", cardRoutes)

//levantar servidor
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`)
})