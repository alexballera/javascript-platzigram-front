import yo from 'yo-yo'
import landing from '../landing'

var box = yo`
<div class="col s12 m7">
  <div class="row">
    <div class="signup-box">
      <h1 class="platzigram">Platzigram</h1>
      <form action="" class="signup-form">
        <div class="section">
          <a href="" class="btn btn-fb hide-on-small-only waves-effect waves-light">Iniciar sesión con Facebook</a>
          <a href="" class="btn btn-fb hide-on-med-and-up waves-effect waves-light"><i class="fa fa-facebook-official" aria-hidden="true"></i>
Iniciar sesión</a>
        </div>
        <div class="divider"></div>
        <div class="section">
          <input type="text" name="username" placeholder="Nombre de usuario">
          <input type="password" name="password" placeholder="Contraseña">
          <button class="btn waves-effect waves-light btn-signup" type="submit">Regístrate</button>
        </div>
      </form>
    </div>
  </div>
  <div class="row">
    <div class="login-box">
      ¿No tienes una cuenta? <a href="/signup">Regístrate</a>
    </div>
  </div>
</div>
  `
  module.exports = landing(box)
