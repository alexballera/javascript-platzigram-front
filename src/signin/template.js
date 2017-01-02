import yo from 'yo-yo'
import landing from '../landing'
import translate from '../translate'

var box = yo`
<div class="col s12 m7">
  <div class="row">
    <div class="signup-box">
      <h1 class="platzigram">Platzigram</h1>
      <form action="" class="signup-form">
        <div class="section">
          <a href="" class="btn btn-fb hide-on-small-only waves-effect waves-light">
            ${translate.message('signup.facebook')}
          </a>
          <a href="" class="btn btn-fb hide-on-med-and-up waves-effect waves-light">
            <i class="fa fa-facebook-official" aria-hidden="true"></i>
            ${translate.message('signup.text')}
          </a>
        </div>
        <div class="divider"></div>
        <div class="section">
          <input type="text" name="username" placeholder="${translate.message('username')}">
          <input type="password" name="password" placeholder="${translate.message('password')}">
          <button class="btn waves-effect waves-light btn-signup" type="submit">
            ${translate.message('signup.text')}
          </button>
        </div>
      </form>
    </div>
  </div>
  <div class="row">
    <div class="login-box">
      ${translate.message('signin.not-have-account')} <a href="/signup">${translate.message('signup.call-to-action')}</a>
    </div>
  </div>
</div>
  `
  module.exports = landing(box)
