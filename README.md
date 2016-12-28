### Creando un Proyecto con materialize

**Instalar**
sudo npm i -D materialize-css

Agregar al main.js para ser compilado por Babel:

import materialize from '../../node_modules/materialize-css/js/materialize.js'

(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    materialize()
  }
})()

Agregar a style.scss para ser preprocesado con sass

@import '../../../node_modules/materialize-css/sass/materialize'; 
