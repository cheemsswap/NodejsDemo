const express = require('express')

const user = express.Router()

user.get("/login", (req, res) => {
    res.end("user login")
})

module.exports = user