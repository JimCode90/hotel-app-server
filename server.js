import express from "express"
import { readdirSync } from 'fs'
import cors from 'cors'
const morgan = require("morgan")
require('dotenv').config()

const app = express()

//DB: Connection

//middlewares
app.use(morgan("dev"))

// route middleware
readdirSync('./routes').map((r) =>
    app.use("/api", require(`./routes/${r}`))
)

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log("Servidor corriendo en el puerto " + port)
})