
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.send('Estoy en casa!')
  })

app.listen(port, () => {
  console.log(`escuchando en el puerto ${port}`)
})