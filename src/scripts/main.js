// import $ from 'jquery'
// import materialize from '../../node_modules/materialize-css/dist/js/materialize.js'
import views from './lib/views'
(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    views()
  }
})()
