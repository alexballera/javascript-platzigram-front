// import $ from 'jquery'
// import materialize from '../../node_modules/materialize-css/dist/js/materialize.js'
import page from './lib/page'
(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    page()
  }
})()
