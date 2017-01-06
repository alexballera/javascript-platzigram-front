import page from 'page'
import empty from 'empty-element'
import template from './template'
import title from 'title'
import header from '../header'
import request from 'superagent'
import axios from 'axios'
import Webcam from 'webcamjs'
import picture from '../picture-card'

var main = document.getElementById('main-container')

export default () => {
  page('/', header, loading, asyncLoad, (ctx, next) => {
    title('Platzigram')
    empty(main).appendChild(template(ctx.pictures))

    const picturePreview = $('#picture-preview')
    const camaraInput = $('#camara-input')
    const cancelPicture = $('#cancelPicture')
    const shootButton = $('#shoot')
    const uploadButton = $('#uploadButton')

    function reset() {
      picturePreview.addClass('hide')
      cancelPicture.addClass('hide')
      uploadButton.addClass('hide')
      shootButton.removeClass('hide')
      camaraInput.removeClass('hide')
    }

    cancelPicture.click(reset)

    $('.modal').modal({
      ready: (modal, trigger) => {
        Webcam.set({
              width: 320, //tamaño del preview
              height: 240, //tamaño del preview
              dest_width: 320, //tamaño de la imagen
              dest_height: 240, //tamaño de la imagen
              image_format: 'jpeg',
              jpeg_quality: 90,
              force_flash: false,
              flip_horiz: true,
              fps: 45
          })
        Webcam.attach('#camara-input')
        shootButton.click((ev) => {
          Webcam.snap((data_uri) => {
            picturePreview.html(`<img src="${data_uri}"/>`)
            picturePreview.removeClass('hide')
            cancelPicture.removeClass('hide')
            uploadButton.removeClass('hide')
            shootButton.addClass('hide')
            camaraInput.addClass('hide')
            uploadButton.off('click')
            uploadButton.click(() => {
              const pic = {
                url: data_uri,
                likes: 0,
                liked: false,
                createdAt: +new Date(),
                user: {
                  username: 'alexballera',
                  avatar: 'https://en.gravatar.com/userimage/47902132/6c0627fea40f1121473a83983b792a26.jpg?size=200'
                }
              }
              $('#picture-cards').prepend(picture(pic))
              reset()
              $('#modalCamara').modal('close')
            })
          })
        })
      },
      complete: () => {
        Webcam.reset()
        reset()
      }
    })
  })

  function loading(ctx, next) {
    var el = document.createElement('div')
    el.classList.add('loader')
    main.appendChild(el)
    next()
  }
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
