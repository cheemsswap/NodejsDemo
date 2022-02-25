const express = require('express')

const admin = express.Router()

admin.get("/login", (req, res) => {
    res.end("admin login")
})

module.exports = admin