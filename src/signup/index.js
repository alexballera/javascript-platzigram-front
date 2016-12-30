import page from 'page'
import empty from 'empty-element'
import template from './template'
import title from 'title'

var main = document.getElementById('main-container')

export default () => {
  page('/signup', (ctx, next) => {
    title('Platzigram - Signup')    
    empty(main).appendChild(template)
  })
}
