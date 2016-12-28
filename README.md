# Creando un Proyecto con materialize

**Instalar**  
```bash
sudo npm i -D materialize-css
```

Agregar al main.js para ser compilado por Babel:
```javascript
import materialize from '../../node_modules/materialize-css/js/materialize.js'

(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    materialize()
  }
})()
```
Agregar a *style.scss* para ser preprocesado con sass  
```css
@import '../../../node_modules/materialize-css/sass/materialize';
```
