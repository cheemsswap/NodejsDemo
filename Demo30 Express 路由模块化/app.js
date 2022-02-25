const express = require('express')

const app = express()

const user = require('./routers/user')
const admin = require('./routers/admin')


app.use('', user)
app.use('/admin', admin)

app.listen(3000)