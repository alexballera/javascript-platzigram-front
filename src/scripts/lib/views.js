import page from 'page'
import landing from '../../landing'
import signin from '../../signin'
import signup from '../../signup'
import homepage from '../../homepage'

// https://visionmedia.github.io/page.js/

export default () => {
  landing()
  signin()
  signup()
  homepage()
  page()
}
