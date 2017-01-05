import yo from 'yo-yo'
import translate from '../translate'

export default () => {
  var el = yo`
    <div class="container">
      <div class="row">
        <div class="col s12 l3 center-align"><a href="#" data-activates="dropdown1" class="dropdown-button btn btn-flat">${translate.message('language')}</a>
          <ul id="dropdown1" class="dropdown-content">
            <li><a href="#" onclick=${lang.bind(null, 'es')}>${translate.message('spanish')}</a></li>
            <li><a href="#" onclick=${lang.bind(null, 'en-US')}>${translate.message('english')}</a></li>
          </ul>
        </div>
        <div class="col s12 l3 push-l6 center"><i aria-hidden="true" class="fa fa-copyright"></i> 2016 Platzigram</div>
      </div>
    </div>`
  document.getElementById('footer-container').appendChild(el)

  function lang(locale) {
    localStorage.locale = locale
    location.reload()
    return false
  }
}
