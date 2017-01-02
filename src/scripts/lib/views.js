import page from 'page'
import signin from '../../signin'
import signup from '../../signup'
import homepage from '../../homepage'
import footer from '../../footer'

// https://visionmedia.github.io/page.js/

export default () => {
  // require('moment/locale/es')
  signin()
  signup()
  homepage()
  footer()

  page()
}
