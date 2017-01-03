import page from 'page'
import empty from 'empty-element'
import template from './template'
import title from 'title'
import header from '../header'
import request from 'superagent'
import axios from 'axios'

export default () => {
  page('/', header, asyncLoad, (ctx, next) => {
    title('Platzigram')
    var main = document.getElementById('main-container')
    empty(main).appendChild(template(ctx.pictures))
  })
  // Superagent
  function loadPictures(ctx, next) {
    request
      .get('/api/pictures')
      .end(function (err, res) {
        if (err) return console.log(err)
        ctx.pictures = res.body
        next()
      })
  }
  // Axios
  function loadPicturesAxios(ctx, next) {
    axios
      .get('/api/pictures')
      .then(res => {
        ctx.pictures = res.data
        next()
      })
      .catch(err => console.log(err))
  }
  // Fetch
  function loadPicturesFetch(ctx, next) {
    fetch('/api/pictures')
      .then(res => res.json())
      .then((pictures) => {
        ctx.pictures = pictures
        next()
      })
      .catch(err => console.log(err))
  }
  //  AsyncLoad
  //  https://babeljs.io/docs/plugins/transform-regenerator/
  //  https://www.npmjs.com/package/babel-plugin-transform-regenerator
  //  https://babeljs.io/docs/usage/polyfill/
  async function asyncLoad(ctx, next) {
    try{
      ctx.pictures = await fetch('./api/pictures').then(res => res.json())
      next()
    } catch (err) {
      return console.log(err)
    }
  }
}
