var express = require('express')
var multer  = require('multer')
var ext = require('file-extension')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, + Date.now() + '.' + ext(file.originalname))
  }
})

var upload = multer({ storage: storage }).single('picture')

var app = express()
app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (req, res) => {
 res.render('index', {title: 'Platzigram'})
})

app.get('/signup', (req, res) => {
 res.render('index', {title: 'Platzigram - Signup'})
})

app.get('/signin', (req, res) => {
 res.render('index', {title: 'Platzigram - Signin'})
})

app.get('/api/pictures', (req, res) => {
  var pictures = [
    {
      user: {
        username: 'alexballera',
        avatar: 'https://en.gravatar.com/userimage/47902132/6c0627fea40f1121473a83983b792a26.jpg?size=200'
      },
      url: 'images/office.jpg',
      likes: 0,
      liked: false
      // createdAt: new Date()
    },
    {
      user: {
        username: 'alexballera',
        avatar: 'https://en.gravatar.com/userimage/47902132/6c0627fea40f1121473a83983b792a26.jpg?size=200'
      },
      url: 'images/office.jpg',
      likes: 1,
      liked: true
      // createdAt: new Date().setDate(new Date().getDate() - 10)
    }
  ]
  setTimeout(() => {
    res.send(pictures)
  }, 2000)
})

app.post('/api/pictures', (req, res) => {
  upload(req, res, function(err) {
    if (err) {
      return res.status(500).send('Error uploading file')
    }
    res.send('File uploaded')
  })
})

app.listen(3000, (err) => {
 if(err) return console.log('Hubo un error'), process.exit(1)

 console.log('Escuchando en el puerto 3000')
})
