const path = require('path')

module.exports = {

    home: (req, res) => {
        res.sendFile(path.join(__dirname, "../../index.html"))
    },
    css: (req, res) => {
        res.sendFile(path.join(__dirname, "../../index.css"))
    },
    js: (req, res) => {
        res.sendFile(path.join(__dirname, "../../index.js"))
    },
    getImage: (req, res) => {
        res.sendFile(path.join(__dirname, "../../pics/pic2.jpg.png"))
    },
    getImage2: (req, res) => {
        res.sendFile(path.join(__dirname, "../../pics/FCbg.png"))
    }


}