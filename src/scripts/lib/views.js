import page from 'page'
import signin from '../../signin'
import signup from '../../signup'
import homepage from '../../homepage'
// import moment from 'moment'

// https://visionmedia.github.io/page.js/

export default () => {
  // require('moment/locale/es')
  signin()
  signup()
  homepage()

  page()
}
