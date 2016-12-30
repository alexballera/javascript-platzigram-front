import page from 'page'

// https://visionmedia.github.io/page.js/

export default () => {
  var main = document.getElementById('main-container')

  page('/', (ctx, next) => {
    main.innerHTML = 'Home <a href="/signup">Signup</a>'
  })

  page('/signup', (ctx, next) => {
    main.innerHTML = '<a href="/">Home</a> Signup'
  })
  page()

}
