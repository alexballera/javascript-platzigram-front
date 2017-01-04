import page from 'page'
import header from '../header'
import title from 'title'
import empty from 'empty-element'
import template from './template'

var main = document.getElementById('main-container')

export default () => {
  page('/:username', header, loadUser, (ctx, next) => {
    title(`Platzigram - ${ctx.params.user}`)
    empty(main).appendChild(template(ctx.user))
  })

  async function loadUser (ctx, next) {
    try{
      ctx.user = await fetch(`/api/user/${ctx.params.username}`).then(res => res.json())
      next()
    } catch (err) {
      console.log(err)
    }
  }
}
