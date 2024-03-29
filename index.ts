// Imports
import express, { Express } from "express"
import cors from "cors"
import "dotenv/config"
import { createWord, deleteWord, getWord, getWords } from "./db"
import { validateTitle } from "./validateTitle"

// Middlware
export const app: Express = express()
app.use(cors())
app.use(express.json())

// Listen
app.listen(process.env.PORT || 8080, () => {
  console.log(`Currrently listening on PORT: ${process.env.PORT}`)
})

// API Endpoints
app.get("/words", async (req, res) => {
  const words = await getWords()
  res.status(200).json(words)
})

app.get("/words/:id", async (req, res) => {
  const id = req.params.id
  const word = await getWord(Number(id))
  res.status(200).json(word)
})

app.post("/words", async (req, res) => {
  const { title, definition } = req.body
  if (validateTitle(title)) {
    const word = await createWord(title, definition)
    res.status(201).json(word)
  } else res.status(400).json("Invalid title!")
})

app.delete("/words", async (req, res) => {
  const { id } = req.body
  const word = await deleteWord(Number(id))
  res.status(200).json(word)
})
