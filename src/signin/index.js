import page from 'page'
import empty from 'empty-element'
import template from './template'
import title from 'title'

var main = document.getElementById('main-container')

export default () => {
  page('/signin', (ctx, next) => {
    title('Platzigram - Signin')
    empty(main).appendChild(template)
  })
}
