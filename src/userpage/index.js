import page from 'page'
import template from './template'
import title from 'title'
import empty from 'empty-element'
import header from '../header'

var main = document.getElementById('main-container')

export default () => {
  page('/:username', loadUser, header, (ctx, next) => {
    title(`Platzigram - ${ctx.user.username}`)
    empty(main).appendChild(template(ctx.user))
    // $('.materialboxed').materialbox()
  })

  page('/:username/:id', loadUser, header, (ctx, next) => {
    title(`Platzigram - ${ctx.user.username}`)
    empty(main).appendChild(template(ctx.user))
    $('.modal').modal({// No funciona!!!
      // ready: (modal, trigger) => {
      // },
      complete: () => {
        page(`/${ctx.params.username}`)
      }
    })
    // $('.materialboxed').materialbox()
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
