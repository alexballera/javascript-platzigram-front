import page from 'page'
import empty from 'empty-element'
import template from './template'
import title from 'title'
import header from '../header'
import request from 'superagent'
import axios from 'axios'

export default () => {
  page('/', header, loadPicturesAxios, (ctx, next) => {
    title('Platzigram')
    var main = document.getElementById('main-container')
    empty(main).appendChild(template(ctx.pictures))
  })
  function loadPictures(ctx, next) {
    request
      .get('/api/pictures')
      .end(function (err, res) {
        if (err) return console.log(err)
        ctx.pictures = res.body
        next()
      })
  }
  function loadPicturesAxios(ctx, next) {
    axios
      .get('/api/pictures')
      .then((res) => {
        ctx.pictures = res.data
        next()
      })
      .catch((err) => console.log(err))
  }
}
