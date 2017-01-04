import page from 'page'
import header from '../header'
import title from 'title'
import empty from 'empty-element'
import template from './template'

var main = document.getElementById('main-container')

export default () => {
  page('/:username', header, (ctx, next) => {
    title(`Platzigram - ${ctx.params.username}`)
    empty(main).appendChild(template(ctx.params.username))
  })
}
