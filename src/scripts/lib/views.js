import page from 'page'
import signin from '../../signin'
import signup from '../../signup'
import homepage from '../../homepage'

// https://visionmedia.github.io/page.js/

export default () => {
  signin()
  signup()
  homepage()
  page()
}
