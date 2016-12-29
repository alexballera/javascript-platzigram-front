var express = require('express')
var app = express()

app.get('/', (req, res) => {
  res.send('Hola Mundo')
})

app.listen(3000, (err) => {
  if (err) return console.log('Hubo en error'), process.exit(1)

  console.log('Escuchando puerto 3000')
})
