# 目录结构

```bash
---routers
	---admin.js
	---user.js
---app.js
```

# 1、admin.js

```bash
const express = require('express')

const admin = express.Router()

admin.get("/login", (req, res) => {
    res.end("admin login")
})

module.exports = admin
```

# 2、user.js

```bash
const express = require('express')

const user = express.Router()

user.get("/login", (req, res) => {
    res.end("user login")
})

module.exports = user
```

# 3、app.js

```bash
const express = require('express')

const app = express()

const user = require('./routers/user')
const admin = require('./routers/admin')


app.use('', user)
app.use('/admin', admin)

app.listen(3000)
```