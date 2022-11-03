const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
app.use(express.json())
app.use(cors())

const {home, css, js, getImage, getImage2} = require("./controllers/pageCtrl.js")

let Rollbar = require('rollbar')
let rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

app.get("/", home)
app.get("/css", css)
app.get("/js", js)
app.get("/img1", getImage)
app.get("/img2", getImage2)

const { PORT } = process.env

app.listen(PORT, () => console.log(`Tis listens on the PORT of our lord ${PORT}`))
