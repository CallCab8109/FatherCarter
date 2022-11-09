const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
app.use(express.json())
app.use(cors())

const {home, css, js, getImage, getImage2, getQuote, getConfessionalsPage, confessionsForm, getConfessions} = require("./controllers/pageCtrl.js")
// const { getQuote } = require('./controller')

var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true
});




app.get("/", home)
app.get("/css", css)
app.get("/js", js)
app.get("/img1", getImage)
app.get("/img2", getImage2)
app.get("/api/getQuote", getQuote)
app.get("/confessionalsPage", getConfessionalsPage)
app.post("/api/confessionsForm", confessionsForm)
app.get("/api/getConfessions", getConfessions)

const { PORT } = process.env

app.listen(PORT, () => console.log(`Tis listens on the PORT of our lord ${PORT}`))
