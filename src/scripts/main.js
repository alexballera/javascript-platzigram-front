import materialize from '../../node_modules/materialize-css/js/materialize.js'

(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    materialize()
  }
})()
