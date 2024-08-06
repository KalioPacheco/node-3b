const express = require('express')
const app = express()
const routes = require("./src/network")

const port = 8000
app.use(express.json())

routes(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})