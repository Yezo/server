//Imports
import express, { Express, Request, Response } from "express"
import cors from "cors"
import "dotenv/config"

//Middlware
const app: Express = express()
app.use(cors())
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.send("HELLO FROM EXPRESS + TS!!!!")
})

app.get("/hi", (req: Request, res: Response) => {
  res.send("hello!")
})

app.listen(process.env.PORT || 8080, () => {
  console.log(`Currrently listening on PORT: ${process.env.PORT}`)
})
