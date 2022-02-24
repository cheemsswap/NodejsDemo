
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/login', (req, res) => {
    const body = req.body
    res.writeHead(200, { 'Content-Type': 'text/html;charset="UTF-8"' });
    res.end(JSON.stringify(body));
})

app.listen(8080)
