import page from 'page'

export default () => {
  page('/', (ctx, next) => {
    var main = document.getElementById('main-container')
    main.innerHTML = '<a href="/signup">Signup</a>'
  })
}
