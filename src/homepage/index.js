import page from 'page'
import empty from 'empty-element'
import template from './template'
import title from 'title'
import request from 'superagent'
import header from '../header'

export default () => {
  page('/', header, loadPictures, (ctx, next) => {
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
}
