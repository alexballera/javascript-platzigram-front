import page from 'page'
import yo from 'yo-yo'
import empty from 'empty-element'

// https://visionmedia.github.io/page.js/

export default () => {
  var main = document.getElementById('main-container')

  page('/', (ctx, next) => {
    empty(main).innerHTML = 'Home <a href="/signup">Signup</a>'
  })

  page('/signup', (ctx, next) => {
    let el = yo`
    <div class="container">
      <div class="row">
        <div class="col s10 push-s1">
          <div class="row">
            <div class="col m5 hide-on-small-only">
              <img class="iphone" src="images/iphone.png" alt="">
            </div>
            <div class="col s12 m7">
              <div class="row">
                <div class="signup-box">
                  <h1 class="platzigram">Platzigram</h1>
                  <form action="" class="signup-form">
                    <h2>Regístrate para ver fotos de tus amigos</h2>
                    <div class="section">
                      <a href="" class="btn btn-fb hide-on-small-only waves-effect waves-light">Iniciar sesión con Facebook</a>
                      <a href="" class="btn btn-fb hide-on-med-and-up waves-effect waves-light">Iniciar sesión</a>
                    </div>
                    <div class="divider"></div>
                    <div class="section">
                      <input type="email" name="email" placeholder="Correo electrónico">
                      <input type="text" name="name" placeholder="Nombre completo">
                      <input type="text" name="username" placeholder="Nombre de usuario">
                      <input type="password" name="password" placeholder="Contraseña">
                      <button class="btn waves-effect waves-light btn-signup" type="submit">Regístrate</button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="row">
                <div class="login-box">
                  ¿Tienes una cuenta? <a href="/signin">Entrar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
    empty(main).appendChild(el)
  })
  page()

}
