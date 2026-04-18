require("dotenv").config()
const express= require("express")
const cors = require("cors")

const apiKey= process.env.GOOGLE_API_KEY
const searchEngineId = process.env.GOOGLE_SEARCH_ENGINE_ID

const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Server Running")
})

app.post("/search", async (req, res) =>{
    const query= req.body.query
    console.log(query)

    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${query}`)
    const data = await response.json()
    console.log(data)
    res.send(data)
})

app.listen(3000, () => {
    console.log("Server started on port 3000")
})

