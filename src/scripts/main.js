// import views from './lib/views'
import 'babel-polyfill'
import page from 'page'
import moment from 'moment'
import signin from '../signin'
import signup from '../signup'
import homepage from '../homepage'
import userpage from '../userpage'
import footer from '../footer'

(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    require('moment/locale/es')
    signin()
    signup()
    homepage()
    userpage()
    footer()
    page()
  }
})()
