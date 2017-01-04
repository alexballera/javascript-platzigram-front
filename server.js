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
  setTimeout(() => res.send(pictures), 300)
})

app.post('/api/pictures', (req, res) => {
  upload(req, res, function(err) {
    if (err) {
      return res.status(500).send('Error uploading file')
    }
    res.send('File uploaded')
  })
})

app.get('/api/user/:username', (req, res) => {
  const user = {
    username: 'alexballera',
    avatar: 'https://en.gravatar.com/userimage/47902132/6c0627fea40f1121473a83983b792a26.jpg?size=200',
    pictures: [
      {
        id: 1,
        src: 'https://igcdn-photos-a-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-15/e35/13739563_1269019793110712_358274010_n.jpg',
        likes: 3
      },
      {
        id: 2,
        src: 'https://ig-s-d-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-15/e35/13774473_1176976522343399_1216847652_n.jpg',
        likes: 5
      },
      {
        id: 3,
        src: 'https://igcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-15/e35/13628249_1729827633932473_2101470748_n.jpg',
        likes: 10
      },
      {
        id: 4,
        src: 'https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-15/e35/13735893_181845118895323_139405802_n.jpg',
        likes: 8
      },
      {
        id: 5,
        src: 'https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-15/e35/13744959_886716394773555_1283437724_n.jpg',
        likes: 12
      }
    ]
  }
  res.send(user)
})

app.get('/:username', (req, res) => {
  res.render('index', {title: `Platzigram - ${req.params.username}`})
})

app.listen(3000, (err) => {
 if(err) return console.log('Hubo un error'), process.exit(1)

 console.log('Escuchando en el puerto 3000')
})
