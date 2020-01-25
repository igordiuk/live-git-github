const express = require('express')

const app = express()
app.use(express.json())

app.get('/teste', (req, res) => {
  return res.json({ hello: 'rocketseat' })
})

app.listen(3333)