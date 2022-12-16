const express = require('express');
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.get('/json', (req, res) => {
  const duck = { firstName: 'Loulou', lastName: 'Duck' }
  res.json(duck)
})

app.listen(port, () => {
  console.log(`My first web server listening on port ${port}`)
})