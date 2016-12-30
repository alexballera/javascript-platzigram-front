var express = require('express')
var app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, (err) => {
  if (err) return console.log('Hubo en error'), process.exit(1)

  console.log('Escuchando puerto 3000')
})
